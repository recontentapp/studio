import { Flex } from '@radix-ui/themes'
import { PropsWithChildren } from 'react'

export const Container = ({ children }: PropsWithChildren) => {
  return (
    <Flex direction="row" width="100%" height="100%">
      {children}
    </Flex>
  )
}
