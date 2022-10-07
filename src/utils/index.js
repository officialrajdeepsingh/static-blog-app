import SITE_URL, { show_per_page } from "../config";


//  array sortByDate
export function sortByDate(a, b) {
  return new Date(b.date) - new Date(a.date)
}

// slugify the title 
export function slugify(title) {
  return title.toLowerCase().trim().replace(/[^\w ]+/g, '').replace(/ +/g, '-');
}

// count the page number
export function pageCount(number) {

  return Math.ceil(number / show_per_page);

}

// convert the image url
export function ImageUrl(url) {

  return SITE_URL + url

}
//  date converter 
export function dateConverter(parmDate) {

  let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const date = new Date(parmDate)

  return `Published on ${monthNames[date.getMonth() - 1]}  ${date.getDate()}th, ${date.getFullYear()}`
}

