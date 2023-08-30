import { CurrencyDollar, MapPinLine } from '@phosphor-icons/react'
import { TextRegular, TextTitle } from '../../components/Typography'
import {
  BoxConfirm,
  BoxForm,
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
import { BoxPayment } from './components/BoxPayment'
import { useNavigate } from 'react-router-dom'

enum PaymentMethods {
  credit = 'credit',
  debit = 'debit',
  money = 'money',
}

const formValidationSchema = zod.object({
  cep: zod.string().min(1, 'Informe o CEP'),
  street: zod.string().min(1, 'Informe o Rua'),
  number: zod.string().min(1, 'Informe o Número'),
  complement: zod.string(),
  district: zod.string().min(1, 'Informe o Bairro'),
  city: zod.string().min(1, 'Informe a Cidade'),
  uf: zod.string().min(1, 'Informe a UF'),
  paymentMethod: zod.nativeEnum(PaymentMethods, {
    errorMap: () => {
      return { message: 'Informe o método de pagamento' }
    },
  }),
})

export type OrderData = zod.infer<typeof formValidationSchema>

type ConfirmOrderFormData = OrderData

export const Checkout = () => {
  const { cartItems } = useCart()

  const confirmOrderForm = useForm<ConfirmOrderFormData>({
    resolver: zodResolver(formValidationSchema),
  })

  const { handleSubmit } = confirmOrderForm

  const navigate = useNavigate()
  const { cleanCart } = useCart()

  function handleConfirmOrder(data: ConfirmOrderFormData) {
    navigate('/success', {
      state: data,
    })
    cleanCart()
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

            <BoxPayment />
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
