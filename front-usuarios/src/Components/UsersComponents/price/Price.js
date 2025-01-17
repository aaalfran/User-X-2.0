import React from 'react'
import styled from 'styled-components'
import { toNumberString } from '../../../utils/convertingFunctions'

const Container = styled.div`
  max-width: fit-content;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  color: ${(props) => props.theme.colors.darkBlue};
  font-weight: 500;
`

const TypeOfCurrency = styled.span`
  font-size: 1rem;
  text-transform: uppercase;
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
  @media (max-width: 360px) {
    font-size: 0.5rem;
  }
`

const IntegerValue = styled.span`
  font-size: 2rem;
  line-height: 1;
  @media (max-width: 425px) {
    font-size: 1.6rem;
  }
  @media (max-width: 360px) {
    font-size: 1rem;
  }
`

const DecimalValue = styled.span`
  font-size: 1rem;
  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
  @media (max-width: 360px) {
    font-size: 0.5rem;
  }
`

function Price({ price = '0', typeOfCurrency = 'US$' }) {
  const priceString = toNumberString(price)
  const priceParts = priceString.split('.')
  return (
    <Container>
      <TypeOfCurrency>{typeOfCurrency}</TypeOfCurrency>
      <IntegerValue>{priceParts[0]}</IntegerValue>
      <DecimalValue>{priceParts[1]}</DecimalValue>
    </Container>
  )
}

export default Price
