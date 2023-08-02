import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react'
import { TextRegular, TextTitle } from '../../components/Typography'
import {
  BoxConfirm,
  BoxForm,
  CardConfirm,
  CardForm,
  CardPayment,
  CheckoutContainer,
  FormInputs,
  InputBox,
  SubtitleIcon,
} from './styles'

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
              <TextRegular color="subtitle">Endereço de Entrega</TextRegular>
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
              <TextRegular color="subtitle">Pagamento</TextRegular>
              <TextRegular size="s">
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </TextRegular>
            </div>
          </SubtitleIcon>
          <button>
            <CreditCard size={16} />
            Cartão de crédito
          </button>
          <button>
            <Bank size={16} />
            Cartão de débito
          </button>
          <button>
            <Money size={16} />
            Dinheiro
          </button>
        </CardPayment>
      </BoxForm>
      <BoxConfirm>
        <TextTitle size="xs" weight="700">
          Cafés selecionados
        </TextTitle>
        <CardConfirm>
          <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <p>Expresso Tradicional</p>
            </div>
            <div>
              <p>R$ 9,90</p>
            </div>
          </div>

          <div>
            <div>
              <p>Total de itens</p>
            </div>
            <div>
              <p>R$ 29,70</p>
            </div>
          </div>
          <div>
            <div>
              <p>Entrega</p>
            </div>
            <div>
              <p>R$ 3,50</p>
            </div>
          </div>
          <div>
            <div>
              <p>Total</p>
            </div>
            <div>
              <p>R$ 33,20</p>
            </div>
          </div>
          <button>Confirmar Pedido</button>
        </CardConfirm>
      </BoxConfirm>
    </CheckoutContainer>
  )
}
