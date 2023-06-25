import { MyIcon } from '../icons/MyIcon'
import { MyHStack } from '../ui/MyHStack'

export const MyHeader = () => {
  const menu = [
    { name: 'HOME', href: '/' },
    { name: 'お知らせ', href: '/news/' },
    { name: '会社概要', href: '/about/' },
    { name: '特集', href: '/lp/' },
  ]
  return (
    <>
      <div className={'p-4 px-8 border-b border-gray-200'}>
        <MyHStack className={'space-x-2 justify-between'}>
          <a href='/' className={'inline-block'}>
            <MyHStack className={'space-x-0'}>
              <div className={'text-4xl text-blue-800 mr-2'}>
                <MyIcon name={'react'} />
              </div>
              <h1 className={'text-3xl'}>SITE NAME</h1>
            </MyHStack>
          </a>
          <MyHStack className={'space-x-8'}>
            {menu.map((i) => {
              return (
                <a
                  key={i.name}
                  href={i.href}
                  className={
                    'inline-flex items-center hover:opacity-50 transition-all'
                  }
                >
                  <div className={'text-blue-800'}>
                    <MyIcon
                      size={i.href == '/' ? '24px' : '16px'}
                      name={i.href == '/' ? 'home' : 'arrow_forward'}
                    />
                  </div>
                  <div className={'text-lg ml-1'}>{i.name}</div>
                </a>
              )
            })}
          </MyHStack>
        </MyHStack>
      </div>
    </>
  )
}
