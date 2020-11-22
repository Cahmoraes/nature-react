import React, { useCallback, useState, MouseEvent } from 'react'

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

  const [activeItem, setActiveItem] = useState(menuList[0].itemMenu)

  const changeItemMenu = useCallback((event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const item = event.currentTarget.dataset.click
    setActiveItem(item as string)
  }, [])

  return (
    <Container id={id}>
      <h1>{title}</h1>
      <TabMenu>
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