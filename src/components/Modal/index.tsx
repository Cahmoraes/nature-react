import React, { forwardRef, useImperativeHandle, useState, useCallback } from 'react'

export interface ModalProps {
  openModal(): void
}

const Modal: React.ForwardRefRenderFunction<ModalProps> = ({ children }, ref) => {

  const [visible, setVisible] = useState(false)

  const openModal = useCallback(() => {
    setVisible(true)
  }, [])

  const closeModal = useCallback(() => {
    setVisible(false)
  }, [])

  useImperativeHandle(ref, () => {
    return {
      openModal
    }
  })

  return (
    <>
      {visible && <button onClick={closeModal}>Modal</button>}
    </>
  )
}

export default forwardRef(Modal)