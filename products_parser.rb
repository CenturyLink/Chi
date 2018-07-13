# frozen_string_literal: true

require_dependency 'datasets/parser'

#
# Products
#
module Datasets
  module Parsers
    class ProductsParser < Datasets::Parser

      MAPPINGS = {
        901 => :product_series_title,
        902 => :product_subseries_title,
        903 => :number,
        904 => :note_numbers,
        906 => :figure_filename,
        907 => :photo_filename,
        908 => :data_sheet_filename,
        909 => :certification_names,
        950 => :rectification_type,
        951 => :package_type
      }.freeze

      def self.import!(worksheet, path = nil)

        # Extract the Header Row (on "Parts Data" this is the identifier row)
        header = row_values(worksheet[1])

        header_indexes = {
          902 => header.index(902),
          901 => header.index(901),
          903 => header.index(903)
        }

        # Find the last column that's not a 9xx Index
        traits_starting_index = header.index(950) # parts_identifier_row.index { |identifier| identifier.to_s.match(/^95|^9/) }
        part_traits_idx_range = traits_starting_index..header.length

        # Preload Product Series & Subseries Records
        product_series_models = ProductSeries.includes(:product_subseries).select(:id, :title, :product_type_id).map do |instance|
          [ instance.title, instance ]
        end.to_h

        # Preload Traits
        trait_models = Trait.pluck(:import_id, :id).to_h

        products = []
        # Process Rows and Create or Update Notes
        worksheet[2..-1].each do |row|

          # Skip Empty Rows
          next if empty_row? row

          # Extract Product Number
          number = clean_value(row[header_indexes[903]])
          # puts "Number: #{number}"

          # Create Product
          products << Product.new(number: number) do |product|

            # Product Series
            product_series_title = clean_value(row[header_indexes[901]])
            product_series = product_series_models[product_series_title]
            product.product_series = product_series

            # Product Subseries
            product_subseries_title = clean_value(row[header_indexes[902]])
            if product_series.nil?
              puts product.number
            end
            product.product_subseries = product_series&.product_subseries.find_by(title: product_subseries_title)

            # Product Type
            product.product_type = product_series.product_type

            # Product Class
            product.product_class = product_series.product_class

            # Product Line
            product.product_line = product_series.product_line

            # Traits
            part_traits_idx_range.each do |idx|
              trait_value = clean_value(row[idx])
              import_id = header[idx]

              next if trait_value.blank?
              # puts "Trait Value (#{import_id}): #{trait_value}"

              # begin
              trait = trait_models[import_id]
              # rescue ActiveRecord::RecordNotFound
              #   raise "Could not find Trait ID #{import_id} (for Product on line #{index + 3})"
              # end

              product.product_traits.build(trait_id: trait, value: trait_value)
            end

          end


        end

        products.each do |product|
          product.run_callbacks(:validation) { false }
          # product.run_callbacks(:save) { false }
          # product.run_callbacks(:create) { false }
        end
        Product.import products, recursive: true

      end

    end
  end
end
