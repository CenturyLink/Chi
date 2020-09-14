# Welcome to Chi

Chi is Lumen's design system for building consistent digital products and experiences.

## Getting Started

Integrating Chi with your project is as simple as loading the Chi stylesheet from the [Lumen Assets Server](https://assets.ctl.io). Not only is this a great way to get started with Chi, it is also a highly available and performant option for loading the required assets into your project.

Begin by adding the Chi stylesheet to your project's layout template, replacing `VERSION` with the most recent release of Chi:

``` html
<link rel="stylesheet" href="https://assets.ctl.io/chi/VERSION/chi.css">
```

Next, add the `chi` CSS class to the `<html>` tag of your document to properly scope the styles. This allows Chi to override any existing styles that have been defined by legacy markup.

``` html
<!DOCTYPE html>

<html class="chi">
  ...
</html>
```

At this point you will be able to target the styles available in Chi by referencing its [documentation](https://assets.ctl.io/chi).

## Development Workflow

Set up your Chi development environment with Docker. First make sure you have Docker installed, then run the command:

``` sh
$ scripts/docker.sh alias
$ source ~/.bash_profile
```

Now your environment is set up. To start development run:

``` sh
$ chi start
```

Once the container has been bootstrapped and the Chi project has started, connect to [http://localhost:8000](http://localhost:8000) in your browser to load Chi. While running, any changes to the Chi source will automatically be reloaded in your browser.

The project has been configured to run inside a Docker container so it won't work as a regular node application.

## Testing Changes

We use [BackstopJS](https://garris.github.io/BackstopJS) for visual regression testing of our CSS components. In order to account for differences in development environments we always run these tests in a consistent Docker container. To execute the test suite, run the following command:

``` sh
$ chi test
```

A report containing the results of the test will be created under `reports/html_report`. If there were failures, you will need to visually examine the changes and act appropriately based on the anticipated results.

If you receive a test failure and you've made changes that you know are correct, you will need to override the test references with your new changes by running the `approve` command on BackstopJS:

``` sh
$ chi approve
```

Once you have approved the changes, commit the new reference files with your changes.

## Production

Use the build command to make a ready-to-production build:

``` sh
$ chi build
```

## License

Chi and its documentation are released under the terms of the [MIT license](LICENSE).

In addition, Chi uses several 3rd-party libraries, a list of which can be viewed in the [package.json](package.json) file. Please review each of their license and user agreements, as well.

## Contribution Notice

By contributing to this Project, You grant to CenturyLink and to recipients of software distributed by CenturyLink, a perpetual worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare derivative works of, publicly display, publicly perform, sublicense, and distribute your contributions to this Project (“Your Contributions”), including derivative works thereof.

You grant to CenturyLink and to recipients of software distributed by CenturyLink a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this section), patent license to make, have made, use, offer to sell, sell, import and otherwise transfer Your Contributions, where such license applies only to those patent claims licensable by You that are necessarily infringed by Your Contributions(s) alone or by combination of Your Contribution(s) with this Project. If any entity institutes patent litigation against You or any other entity (including a cross-claim or counterclaim in a lawsuit) alleging that Your Contribution, or this Project, constitutes direct or contributory patent infringement, then any patent licenses granted to that entity under this agreement for Your Contribution or this Project shall terminate as of the date such litigation is filed.

You represent that each of Your Contributions is Your original creation and represent that You are legally entitled to grant the above license and that no other third party permission is required. If your employer(s) has rights to intellectual property that is included in Your Contributions, You represent that You have received permission to make such contributions on behalf of that employer.
