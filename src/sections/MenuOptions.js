import React, { useState } from 'react'
import styled from 'styled-components'
import github from '../assets/github.svg'

const MenuOptions = () => {
  const [, setWidth] = React.useState(window.innerWidth)

  React.useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth))
  }, [])

  const data = [
    { id: 0, label: 'Mainnet' },
    { id: 1, label: 'Polygon' },
  ]

  const DropdownElement = () => {
    const [isOpen, setOpen] = useState(false)
    const [items, ] = useState(data)
    const [selectedItem, setSelectedItem] = useState(null)

    const toggleDropdown = () => setOpen(!isOpen)

    const handleItemClick = (id) => {
      selectedItem === id ? setSelectedItem(null) : setSelectedItem(id)
    }

    return (
      <Dropdown>
        <div className="dropdown-header" onClick={toggleDropdown}>
          {selectedItem
            ? items.find((item) => item.id === selectedItem).label
            : 'lite-app >'}
        </div>
        <div className={`dropdown-body ${isOpen && 'open'}`}>
          {items.map((item) => (
            <div
              className="dropdown-item"
              onClick={(e) => handleItemClick(e.target.id)}
              id={item.id}
            >
              <span
                className={`dropdown-item-dot ${
                  item.id === selectedItem && 'selected'
                }`}
              >
                •{' '}
              </span>
              {item.label}
            </div>
          ))}
        </div>
      </Dropdown>
    )
  }

  return (
    <MenuOptionsSection>
      <ButtonsSection>
        <DropdownElement />
        <a
          href="https://www.mimic.fi/whitepaper.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Whitepaper
        </a>
        <a href="https://mainnet.mimic.fi" target="_blank" rel="noreferrer">
          Docs
        </a>
        <a href="https://polygon.mimic.fi" target="_blank" rel="noreferrer">
          Faqs
        </a>
        <a href="https://polygon.mimic.fi" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
      </ButtonsSection>
    </MenuOptionsSection>
  )
}

const MenuOptionsSection = styled.div`
  display: flex;
  align-items: center;
  img {
    height: 30px;
  }
  a {
    margin: 0 10px;
    display: flex;
    padding: 10px 15px;
    font-weight: 500;
    font-size: 1.25rem;
    font-family: "Poppins-Bold";
    @media only screen and (max-width: 700px) {
      margin: 10px 10px;
    }
  }
`

const ButtonsSection = styled.div`
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 100px;
  @media only screen and (max-width: 700px) {
    margin: 30px 0 0 0;
  }
`

const Dropdown = styled.div`
  width: 200px;
  text-align: right;
  font-weight: 500;
  font-size: 1.25rem;
  font-family: "Poppins-Bold";

  .dropdown-header {
    padding: 10px 15px;
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: right;
  }

  .dropdown-body {
    padding: 5px;
    border-top: 1px solid #e5e8ec;
    display: none;
  }

  .dropdown-body.open {
    display: block;
  }

  .dropdown-item {
    padding: 10px;
  }

  .dropdown-item:hover {
    cursor: pointer;
  }

  .dropdown-item-dot {
    opacity: 0;
    color: #91a5be;
    transition: all 0.2s ease-in-out;
  }

  .dropdown-item-dot.selected {
    opacity: 1;
  }

  .icon {
    font-size: 13px;
    color: #91a5be;
    transform: rotate(0deg);
    transition: all 0.2s ease-in-out;
  }

  .icon.open {
    transform: rotate(90deg);
  }
`

export default MenuOptions
