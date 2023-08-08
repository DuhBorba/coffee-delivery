import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from '@phosphor-icons/react'
import { TextRegular, TextTitle } from '../../components/Typography'
import {
  BoxButtonPayment,
  BoxConfirm,
  BoxForm,
  BoxImageCoffee,
  BoxIncrementRemove,
  BoxRemove,
  BoxTotal,
  ButtonConfirm,
  ButtonPayment,
  ButtonRemove,
  CardConfirm,
  CardForm,
  CardPayment,
  CheckoutContainer,
  CoffeeCard,
  FormInputs,
  InputBox,
  Line,
  SubtitleIcon,
} from './styles'

import Americano from '../../assets/images/americano.svg'

export const Checkout = () => {
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
          <CoffeeCard>
            <BoxImageCoffee>
              <img src={Americano} alt="" />
            </BoxImageCoffee>
            <div>
              <div>
                <TextRegular>Expresso Tradicional</TextRegular>
              </div>
              <BoxRemove>
                <BoxIncrementRemove>
                  <button>
                    <Minus size={14} weight="bold" />
                  </button>
                  <input type="number" value={1} />
                  <button>
                    <Plus size={14} weight="bold" />
                  </button>
                </BoxIncrementRemove>
                <ButtonRemove>
                  <Trash size={16} /> Remover
                </ButtonRemove>
              </BoxRemove>
            </div>
            <TextRegular weight={700}>
              <p>R$ 9,90</p>
            </TextRegular>
          </CoffeeCard>

          <Line />

          <BoxTotal>
            <div>
              <TextRegular size="s">Total de itens</TextRegular>
            </div>
            <div>
              <TextRegular>R$ 29,70</TextRegular>
            </div>
          </BoxTotal>
          <BoxTotal>
            <div>
              <TextRegular size="s">Entrega</TextRegular>
            </div>
            <div>
              <TextRegular>R$ 3,50</TextRegular>
            </div>
          </BoxTotal>
          <BoxTotal>
            <div>
              <TextRegular size="l" weight={700}>
                Total
              </TextRegular>
            </div>
            <div>
              <TextRegular size="l" weight={700}>
                R$ 33,20
              </TextRegular>
            </div>
          </BoxTotal>
          <ButtonConfirm>Confirmar Pedido</ButtonConfirm>
        </CardConfirm>
      </BoxConfirm>
    </CheckoutContainer>
  )
}
