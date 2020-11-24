import React, { useCallback, useState, MouseEvent, useEffect, useRef } from 'react'
import debounce from '../../utils'

import { Container, TabMenu, Item } from './styles'

interface IContentListProps {
  title: string
  id: string
  itemsList: IItemsList[],
  menuList: IMenuList[],
  op?: 'vertical' | 'horizontal'
}

interface IItemsList {
  label_1: string
  description_1: string
  label_2: string
  description_2: string
  img: string
}

interface IMenuList {
  itemMenu: string
}

const ContentList: React.FC<IContentListProps> = ({ title, itemsList, menuList, id, op = 'vertical' }) => {

  const containerRef = useRef<HTMLElement>()
  const menuRef = useRef<HTMLElement>()
  const [activeItem, setActiveItem] = useState(menuList[0].itemMenu)

  const handleShowContent = useCallback(() => {
    const offsetTop = containerRef.current?.offsetTop as any
    const menuHeight = menuRef.current?.offsetHeight as any

    if ((window.pageYOffset + menuHeight * 3) > (offsetTop)) {
      containerRef.current?.classList.add('active')
    }
  }, [])

  useEffect(() => {
    containerRef.current = document.querySelector(`[data-tabmenu='${id}']`) as HTMLElement
    menuRef.current = document.querySelector('[data-menu]') as HTMLElement
  }, [id])

  useEffect(() => {
    const debounceHandleShowContent = debounce(handleShowContent)
    window.addEventListener('scroll', debounceHandleShowContent)
    return () => {
      window.removeEventListener('scroll', debounceHandleShowContent)
    }
  }, [handleShowContent])

  const changeItemMenu = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const item = event.currentTarget.dataset.click
    setActiveItem(item as string)
  }, [])

  return (
    <Container id={id} data-section={id}>
      <TabMenu data-tabmenu={id}>
        <h1>{title}</h1>
        {
          menuList.map(item => (
            <li key={item.itemMenu}>
              <a
                href={`#${item.itemMenu}`}
                data-click={item.itemMenu}
                onClick={changeItemMenu}
                className={activeItem === item.itemMenu ? 'active' : ''}>{item.itemMenu}</a>
            </li>
          ))
        }
      </TabMenu>
      {
        itemsList.map((item, index) => (
          <Item
            op={op}
            key={item.img}
            className={`item ${(activeItem === menuList[index].itemMenu) ? 'active' : ''}`}
            id={menuList[index].itemMenu}
            data-target={menuList[index].itemMenu}
          >
            <div className="item-img">
              <img src={item.img} alt={menuList[index].itemMenu} />
              <h2>{menuList[index].itemMenu}</h2>
            </div>
            {
              op === 'horizontal' ? (
                <div className="item-info">
                  <div>
                    <h3>{item.label_1}</h3>
                    <p>{item.description_1}</p>
                  </div>
                  <div>
                    <h3>{item.label_2}</h3>
                    <p>{item.description_2}</p>
                  </div>
                </div>
              ) : (
                  <div className="item-info">
                    <h3>{item.label_1}</h3>
                    <p>{item.description_1}</p>
                    <h3>{item.label_2}</h3>
                    <p>{item.description_2}</p>
                  </div>
                )
            }

          </Item>
        ))
      }
    </Container>
  )
}

export default ContentList