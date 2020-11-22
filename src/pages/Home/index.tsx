import React from 'react'

import Header from '../../components/Header'
import Slide from '../../components/Slide'

import slide_1 from '../../assets/img/slide/slide-1.jpg'
import slide_2 from '../../assets/img/slide/slide-2.jpg'
import slide_3 from '../../assets/img/slide/slide-3.jpg'
import ContentList from '../../components/ContentList'
import fox_img from '../../assets/img/fox.jpg'
import firefox_img from '../../assets/img/firefox.jpg'
import wolf_img from '../../assets/img/wolf.jpg'
import estrada_img from '../../assets/img/estrada.jpg'
import sol_img from '../../assets/img/sol.jpg'
import verde_img from '../../assets/img/verde.jpg'
import pico_img from '../../assets/img/pico.jpg'
import montanha_img from '../../assets/img/montanha.jpg'
import monte_img from '../../assets/img/monte.jpg'

import { Florestas } from './styles'

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Slide images={[
        {
          src: slide_1,
          title: 'Animais'
        },
        {
          src: slide_2,
          title: 'Florestas'
        },
        {
          src: slide_3,
          title: 'Montanhas'
        }
      ]} />
      <ContentList
        id="animais"
        title="Animais Especiais"
        menuList={[
          {
            itemMenu: 'Fox'
          },
          {
            itemMenu: 'Firefox'
          },
          {
            itemMenu: 'Wolf'
          },
        ]}
        itemsList={[
          {
            img: fox_img,
            label_1: 'Características',
            description_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            label_2: 'Habitat',
            description_2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            img: firefox_img,
            label_1: 'Características',
            description_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            label_2: 'Habitat',
            description_2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            img: wolf_img,
            label_1: 'Características',
            description_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            label_2: 'Habitat',
            description_2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
        ]}
      />

      <Florestas>
        <ContentList
          id="florestas"
          op="horizontal"
          title="Florestas Termais"
          menuList={[
            {
              itemMenu: 'Estrada'
            },
            {
              itemMenu: 'Sol'
            },
            {
              itemMenu: 'Verde'
            },
          ]}
          itemsList={[
            {
              img: estrada_img,
              label_1: 'Características',
              description_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              label_2: 'Habitat',
              description_2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
              img: sol_img,
              label_1: 'Características',
              description_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              label_2: 'Habitat',
              description_2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            },
            {
              img: verde_img,
              label_1: 'Características',
              description_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
              label_2: 'Habitat',
              description_2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
            }
          ]}
        />
      </Florestas>

      <ContentList
        id="montanhas"
        title="Montanhas da Alma"
        menuList={[
          {
            itemMenu: 'Pico'
          },
          {
            itemMenu: 'Montanha'
          },
          {
            itemMenu: 'Monte'
          },
        ]}
        itemsList={[
          {
            img: pico_img,
            label_1: 'Características',
            description_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            label_2: 'Habitat',
            description_2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            img: montanha_img,
            label_1: 'Características',
            description_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            label_2: 'Habitat',
            description_2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          },
          {
            img: monte_img,
            label_1: 'Características',
            description_1: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
            label_2: 'Habitat',
            description_2: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          }
        ]}
      />
    </>
  )
}

export default Home