import compact from '../utils/compact'


export default function eventValidator(data) {
  return compact({
    titleExists:
      !data.title &&
      "You must specify a title for your event",
  })
}
