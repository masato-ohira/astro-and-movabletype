const prompts = require('prompts')

const qa = async (text) => {
  const questions = {
    type: 'text',
    name: 'anser',
    message: text,
  }
  let res = await prompts(questions)
  switch (res.anser) {
    case 'y':
    case 'Y':
    case 'yes':
    case 'YES':
      return true
    default:
      console.info('処理はキャンセルされました')
      process.exit(1)
      break
  }
}

const main = async () => {
  try {
    await qa('本アップを実行してよろしいですか? [y/N]')
    await qa('本当によろしいですか? [y/N]')
    console.info('処理を開始します')
    return true
  } catch (error) {
    console.error('不明なエラー')
    process.exit(1)
  }
}

main()
