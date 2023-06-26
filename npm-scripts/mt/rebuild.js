const puppeteer = require('puppeteer-core')
require('dotenv').config()

const { MT_ADMIN, MT_USER, MT_PASS } = process.env

const main = async () => {
  const browser = await puppeteer.launch({
    channel: 'chrome',
  })

  try {
    // サインイン
    const page = await browser.newPage()
    await page.goto(`${MT_ADMIN}/mt.cgi`)
    await page.type('input[id="username"]', MT_USER)
    await page.type('input[id="password"]', MT_PASS)
    page.click('button[id="sign-in-button"]')

    await page.waitForNavigation({
      timeout: 60000,
      waitUntil: 'domcontentloaded',
    })
    console.log('MTにサインイン成功')

    const rebuild = async (id) => {
      await page.goto(`${MT_ADMIN}/mt.cgi?__mode=rebuild_confirm&blog_id=${id}`)
      console.log(`${id}_再構築開始`)
      page.click(`button[type="submit"]`)
      await page.waitForSelector('.alert-success', { visible: true })
      console.log({ success: `${id}_再構築完了` })
    }

    await rebuild(7)
    await rebuild(8)
    await rebuild(6)
  } catch (error) {
    console.log({ error })
  } finally {
    await browser.close()
  }
}

main()
