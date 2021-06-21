import { merge } from 'lodash'
import { IOptions, rake } from './rake'

const defaults: IOptions = {
  delimiters: ['\\s+'],
  language: 'english',
}

export default function process(text: string, opts?: IOptions): string[] {
  const options: IOptions = merge({}, defaults, opts)
  if (!opts || !opts.language) {
    options.language = 'english'
  }
  const params = merge(options, { corpus: text })
  const keywords = rake(params)
  return keywords
}
