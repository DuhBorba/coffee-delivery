import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { TextRegular, TextTitle } from '../../components/Typography'
import {
  BoxButtonPayment,
  BoxConfirm,
  BoxForm,
  ButtonPayment,
  CardConfirm,
  CardForm,
  CardPayment,
  CheckoutContainer,
  FormInputs,
  InputBox,
  Line,
  SubtitleIcon,
} from './styles'

import { useCart } from '../../hooks/useCart'
import { CoffeeCheckoutCard } from './components/CoffeeCheckoutCard'
import { BoxTotalPrice } from './components/BoxTotalPrice'

export const Checkout = () => {
  const { cartItems } = useCart()

  return (
    <CheckoutContainer>
      <BoxForm>
        <TextTitle size="xs" weight="700">
          Complete seu pedido
        </TextTitle>
        <CardForm>
          <SubtitleIcon variant="yellow-dark">
            <div>
              <MapPinLine size={22} />
            </div>
            <div>
              <TextRegular color="base-subtitle">
                Endereço de Entrega
              </TextRegular>
              <TextRegular size="s">
                Informe o endereço onde deseja receber seu pedido
              </TextRegular>
            </div>
          </SubtitleIcon>
          <FormInputs action="">
            <InputBox>
              <div>
                <input type="text" placeholder="CEP" />
              </div>
            </InputBox>
            <InputBox>
              <div className="street">
                <input type="text" placeholder="Rua" />
              </div>
            </InputBox>
            <InputBox>
              <div>
                <input type="text" placeholder="Número" />
              </div>
              <div className="complement">
                <input type="text" placeholder="Complemento" />
                <p>Opcional</p>
              </div>
            </InputBox>
            <InputBox>
              <div>
                <input type="text" placeholder="Bairro" />
              </div>
              <div className="city">
                <input type="text" placeholder="Cidade" />
              </div>
              <div className="uf">
                <input type="text" placeholder="UF" />
              </div>
            </InputBox>
          </FormInputs>
        </CardForm>
        <CardPayment>
          <SubtitleIcon variant="purple">
            <div>
              <CurrencyDollar size={22} />
            </div>
            <div>
              <TextRegular color="base-subtitle">Pagamento</TextRegular>
              <TextRegular size="s">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </TextRegular>
            </div>
          </SubtitleIcon>
          <BoxButtonPayment>
            <ButtonPayment>
              <CreditCard size={16} />
              Cartão de crédito
            </ButtonPayment>
            <ButtonPayment>
              <Bank size={16} />
              Cartão de débito
            </ButtonPayment>
            <ButtonPayment>
              <Money size={16} />
              Dinheiro
            </ButtonPayment>
          </BoxButtonPayment>
        </CardPayment>
      </BoxForm>
      <BoxConfirm>
        <TextTitle size="xs" weight="700">
          Cafés selecionados
        </TextTitle>
        <CardConfirm>
          {cartItems.map((item) => (
            <>
              <CoffeeCheckoutCard key={item.id} coffee={item} />
              <Line />
            </>
          ))}

          <BoxTotalPrice />
        </CardConfirm>
      </BoxConfirm>
    </CheckoutContainer>
  )
}
