import path from 'path';

const SRC = 'src';
const DIST = 'dist';




const ASSETS = 'website/assets';
const IMAGES = 'images';
const SCRIPTS = 'scripts';
const STYLES = 'styles';
const DOCS = 'website';
const PAGES = 'views';
const LAYOUTS = 'layouts';

export const Paths = {
  SRC,
  DIST,
  dist: {
    ASSETS: path.join(DIST, ASSETS),
    IMAGES: path.join(DIST, ASSETS, IMAGES),
    SCRIPTS: path.join(DIST, ASSETS, SCRIPTS),
    STYLES: path.join(DIST, ASSETS, STYLES),
  },
  src : {
    ASSETS: path.join(SRC, ASSETS),
    IMAGES: path.join(SRC, ASSETS, IMAGES),
    SCRIPTS: path.join(SRC, ASSETS, SCRIPTS),
    STYLES: path.join(SRC, ASSETS, STYLES),
    DOCS: path.join(SRC, DOCS),
    PAGES: path.join(SRC, DOCS, PAGES),
    LAYOUTS: path.join(SRC, DOCS, LAYOUTS),
  }
};

const ROOT_FOLDER = path.join(__dirname, '..');
const SRC_FOLDER = path.join(ROOT_FOLDER, SRC);
const DIST_FOLDER = path.join(ROOT_FOLDER, DIST);

export const Folders = {
  ROOT: ROOT_FOLDER,
  SRC: SRC_FOLDER,
  DIST: DIST_FOLDER,
  dist: {
    ASSETS: path.join(DIST_FOLDER, ASSETS),
    IMAGES: path.join(DIST_FOLDER, ASSETS, IMAGES),
    SCRIPTS: path.join(DIST_FOLDER, ASSETS, SCRIPTS),
    STYLES: path.join(DIST_FOLDER, ASSETS, STYLES),
  },
  src : {
    ASSETS: path.join(SRC_FOLDER, ASSETS),
    IMAGES: path.join(SRC_FOLDER, ASSETS, IMAGES),
    SCRIPTS: path.join(SRC_FOLDER, ASSETS, SCRIPTS),
    STYLES: path.join(SRC_FOLDER, ASSETS, STYLES),
    DOCS: path.join(SRC_FOLDER, DOCS),
    PAGES: path.join(SRC_FOLDER, DOCS, PAGES),
    LAYOUTS: path.join(SRC_FOLDER, DOCS, LAYOUTS),
  }
};
