import React from 'react'
import { InputBox } from './style'
import { useFormContext } from 'react-hook-form'
import { Input } from '../Input'

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string
    }
  }
}

export const BoxInputs = () => {
  const { register, formState } = useFormContext()

  const { errors } = formState as unknown as ErrorsType
  return (
    <>
      <InputBox>
        <div>
          <Input
            placeholder="CEP"
            type="number"
            className="cep"
            {...register('cep')}
            error={errors.cep?.message}
          />
        </div>
      </InputBox>
      <InputBox>
        <div className="street">
          <Input
            type="text"
            placeholder="Rua"
            {...register('street')}
            error={errors.street?.message}
          />
        </div>
      </InputBox>
      <InputBox>
        <div>
          <Input
            type="text"
            placeholder="Número"
            {...register('number')}
            error={errors.number?.message}
          />
        </div>
        <div className="complement">
          <Input
            type="text"
            placeholder="Complemento"
            {...register('complement')}
            error={errors.complement?.message}
            rightText="Opcional"
          />
        </div>
      </InputBox>
      <InputBox>
        <div>
          <Input
            type="text"
            placeholder="Bairro"
            {...register('district')}
            error={errors.district?.message}
          />
        </div>
        <div className="city">
          <Input
            type="text"
            placeholder="Cidade"
            {...register('city')}
            error={errors.city?.message}
          />
        </div>
        <div className="uf">
          <Input
            type="text"
            placeholder="UF"
            {...register('uf')}
            error={errors.uf?.message}
          />
        </div>
      </InputBox>
    </>
  )
}
