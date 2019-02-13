import { config } from "../config";

export function imageUrl(path) {
  try {
    if (!path) return '';
    let header = path.slice(0, +config.images.path.length);
    if (header === config.images.path) {
      return `${config.images.url}/${path}`;
    } else {
      return path;
    }
  } catch (err) {
    console.error(err);
  }
}

export function fileUrl(path) {
  try {
    if (!path) return '';
    let header = path.slice(0, +config.files.path.length);
    if (header === config.files.path) {
      return `${config.files.url}/${path}`;
    } else {
      return path;
    }
  } catch (err) {
    console.error(err);
  }
}