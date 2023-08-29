import React from 'react'
import { InputBox } from './style'
import { useFormContext } from 'react-hook-form'

export const BoxInputs = () => {
  const { register } = useFormContext()

  return (
    <>
      <InputBox>
        <div>
          <input type="text" placeholder="CEP" {...register('cep')} />
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
    </>
  )
}
