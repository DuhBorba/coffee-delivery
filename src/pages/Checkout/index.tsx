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
  SubtitleIcon,
} from './styles'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

import { useCart } from '../../hooks/useCart'
import { CoffeeCheckoutCard } from './components/CoffeeCheckoutCard'
import { BoxTotalPrice } from './components/BoxTotalPrice'
import { BoxInputs } from './components/BoxInputs'

const formValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
})

export type OrderData = zod.infer<typeof formValidationSchema>

type ConfirmOrderFormData = OrderData

export const Checkout = () => {
  const { cartItems } = useCart()

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(formValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    console.log(data)
  }

  return (
    <FormProvider {...confirmOrderForm}>
      <CheckoutContainer onSubmit={handleSubmit(handleConfirmOrder)}>
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

            <FormInputs>
              <BoxInputs />
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
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
              <CoffeeCheckoutCard key={item.id} coffee={item} />
            ))}

            <BoxTotalPrice />
          </CardConfirm>
        </BoxConfirm>
      </CheckoutContainer>
    </FormProvider>
  )
}
