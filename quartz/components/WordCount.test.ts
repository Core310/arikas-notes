import test, { describe } from "node:test"
import assert from "node:assert"
import WordCountConstructor, { countWords } from "./WordCount"
import { QuartzComponentProps } from "./types"
import { GlobalConfiguration } from "../cfg"

describe("countWords", () => {
  test("returns 0 for empty or non-string inputs", () => {
    assert.strictEqual(countWords(""), 0)
    assert.strictEqual(countWords("   "), 0)
    assert.strictEqual(countWords(null), 0)
    assert.strictEqual(countWords(undefined), 0)
  })

  test("counts simple words accurately", () => {
    assert.strictEqual(countWords("hello world"), 2)
    assert.strictEqual(countWords("The quick brown fox jumps over the lazy dog"), 9)
  })

  test("handles irregular whitespace and newlines", () => {
    assert.strictEqual(countWords("  one \n\n two \t three   four  "), 4)
  })
})

describe("WordCount component", () => {
  const cfg = { locale: "en-US" } as GlobalConfiguration

  test("renders word count and reading time for note with text", () => {
    const Component = WordCountConstructor({ showReadingTime: true, wordsPerMinute: 200 })
    const props = {
      cfg,
      fileData: { text: "This is a note with exactly eight words in it." },
      allFiles: [],
    } as unknown as QuartzComponentProps

    const result = Component(props)
    assert.notStrictEqual(result, null)
    assert.ok(result)
    assert.strictEqual((result as any).props.class, "word-count")
  })

  test("returns null when text is empty and showTotalCount is false", () => {
    const Component = WordCountConstructor({ showTotalCount: false })
    const props = {
      cfg,
      fileData: { text: "" },
      allFiles: [],
    } as unknown as QuartzComponentProps

    const result = Component(props)
    assert.strictEqual(result, null)
  })

  test("renders total vault count when showTotalCount is true", () => {
    const Component = WordCountConstructor({ showTotalCount: true, showWordCount: false })
    const props = {
      cfg,
      fileData: { text: "" },
      allFiles: [{ text: "Page one has five words" }, { text: "Page two has four words" }],
    } as unknown as QuartzComponentProps

    const result = Component(props)
    assert.notStrictEqual(result, null)
    assert.ok(result)
  })
})
