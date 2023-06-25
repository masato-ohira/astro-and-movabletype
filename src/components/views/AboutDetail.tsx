import { MyMarkdown } from '../ui/MyMarkdown'

const detail = `# 見出し1

markdownでは、箇条書きは*や-などの記号を文頭に置くことで記述します。箇条書きの階層は行頭スペース4つを足します。

## 見出し2

markdownでは、箇条書きは*や-などの記号を文頭に置くことで記述します。箇条書きの階層は行頭スペース4つを足します。

### 見出し3

markdownでは、箇条書きは*や-などの記号を文頭に置くことで記述します。箇条書きの階層は行頭スペース4つを足します。

#### 見出し4

markdownサンプル文章です。ここは地の文です。

markdownでは、箇条書きは*や-などの記号を文頭に置くことで記述します。箇条書きの階層は行頭スペース4つを足します。

- これはひとつめの箇条書き
- ふたつめの箇条書き
    - 一つ階層が深い箇条書き
- みっつめの箇条書き

### コード

3つのバッククォート記号でくくることで、コード例を示します


markdown形式については、Wikipediaなども参照ください
- http://ja.wikipedia.org/wiki/Markdown

`

export const AboutDetail = () => {
  return <MyMarkdown className={'znc'}>{detail}</MyMarkdown>
}
