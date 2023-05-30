import resources from '@/resources.json'

export function currencyFormat(number) {
  const string = number.toString()
  let dotPosition = string.length - 3
  let array = string.split('')
  while (dotPosition > 0) {
    array.splice(dotPosition, 0, '.')
    dotPosition -= 3
  }
  let formattedNumber = array.join('')

  return `Rp ${formattedNumber}`
}

export function arrayToString(array) {
  const skills = resources.skills
  const length = array.length
  let newArray = array.map((slug) => skills.find((skill) => skill.slug === slug).title)

  let result = ''
  if (length === 1) {
    result = newArray[0]
  } else if (length === 2) {
    result = newArray.join(' and ')
  } else if (length > 2) {
    const lastItem = newArray[length - 1]
    const remainingItems = newArray.slice(0, length - 1).join(', ')
    result = `${remainingItems}, and ${lastItem}`
  }

  return result
}
export function findJob(slug) {
  const jobs = resources.jobs
  return jobs.find((job) => job.slug === slug).title
}
