import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import { JSX } from "preact"

export interface WordCountOptions {
  /** Text prefix before the word count */
  prefix?: string
  /** Whether to show word count for this note */
  showWordCount?: boolean
  /** Whether to show reading time along with word count */
  showReadingTime?: boolean
  /** Reading speed in words per minute */
  wordsPerMinute?: number
  /** Whether to show total vault words */
  showTotalCount?: boolean
  /** Custom label for words */
  wordsLabel?: string
  /** Custom label for single word */
  wordLabel?: string
  /** Custom label for total words */
  totalLabel?: string
}

const defaultOptions: WordCountOptions = {
  prefix: "",
  showWordCount: true,
  showReadingTime: true,
  wordsPerMinute: 200,
  showTotalCount: false,
  wordsLabel: "words",
  wordLabel: "word",
  totalLabel: "words across notes",
}

export function countWords(text: unknown): number {
  if (typeof text !== "string") return 0
  const clean = text.trim()
  if (!clean) return 0
  const matches = clean.match(/\S+/g)
  return matches ? matches.length : 0
}

export default ((userOpts?: Partial<WordCountOptions>) => {
  const options = { ...defaultOptions, ...userOpts }

  function WordCount({ fileData, allFiles, displayClass, cfg }: QuartzComponentProps) {
    const text = fileData.text
    const words = countWords(text)

    if (words === 0 && !options.showTotalCount) {
      return null
    }

    const segments: (string | JSX.Element)[] = []

    if (options.showWordCount && words > 0) {
      const formattedWords = words.toLocaleString()
      const label = words === 1 ? options.wordLabel : options.wordsLabel
      const wordText = `${options.prefix}${formattedWords} ${label}`
      segments.push(<span class="word-count-item word-count-page">{wordText}</span>)

      if (options.showReadingTime) {
        const minutes = Math.max(1, Math.ceil(words / (options.wordsPerMinute ?? 200)))
        const displayedTime =
          i18n(cfg.locale)?.components?.contentMeta?.readingTime({ minutes }) ??
          `${minutes} min read`
        segments.push(<span class="word-count-item word-count-reading-time">{displayedTime}</span>)
      }
    }

    if (options.showTotalCount && allFiles && allFiles.length > 0) {
      const totalWords = allFiles.reduce((sum, f) => sum + countWords(f.text), 0)
      if (totalWords > 0) {
        const totalText = `${totalWords.toLocaleString()} ${options.totalLabel}`
        segments.push(<span class="word-count-item word-count-total">{totalText}</span>)
      }
    }

    if (segments.length === 0) {
      return null
    }

    return (
      <div class={classNames(displayClass, "word-count")}>
        <p>{segments}</p>
      </div>
    )
  }

  WordCount.css = `
.word-count {
  margin: 1.5rem 0 1rem 0;
  color: var(--gray);
  font-size: 0.875rem;
  line-height: 1.5;
}

.word-count p {
  margin: 0;
}

.word-count .word-count-item:not(:last-child)::after {
  content: " \\2022 ";
  padding: 0 0.35rem;
  color: var(--lightgray);
}
`

  return WordCount
}) satisfies QuartzComponentConstructor
