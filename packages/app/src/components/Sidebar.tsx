import { Box, Flex, Text } from '@radix-ui/themes'
import { PropsWithChildren } from 'react'

export const Sidebar = ({ children }: PropsWithChildren) => {
  return (
    <Box
      width="270px"
      height="100vh"
      flexShrink="0"
      overflowX="hidden"
      overflowY="auto"
      style={{ borderRight: '1px solid var(--gray-3)' }}
    >
      <Flex px="3" pt="0" pb="5" direction="column">
        <Flex
          position="sticky"
          style={{ zIndex: 5, backgroundColor: 'var(--color-background)' }}
          top="0"
          direction="row"
          align="center"
          gap="2"
          pt="4"
          pb="5"
          px="2"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 100C0 24 24 0 100 0s100 24 100 100-24 100-100 100S0 176 0 100Z"
              fill="var(--gray-contrast)"
            ></path>
            <path
              fill="var(--color-background)"
              d="M42.4 94.8V42h52.8v52.8z"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M104.8 42v120c33.137 0 60-26.863 60-60s-26.863-60-60-60ZM63.399 161.509l33.807-22.639C94.554 152.06 82.826 162 68.76 162c-1.832 0-3.624-.168-5.361-.491ZM47.085 152.34l47.675-31.926a28.452 28.452 0 0 1 2.841 9.677L55.05 158.586a29.079 29.079 0 0 1-7.964-6.246ZM90.842 114.523l-47.8 32.011A28.454 28.454 0 0 1 40 136.99l43.073-28.845a29.106 29.106 0 0 1 7.768 6.378ZM40.158 128.37c2.314-13.606 14.24-23.97 28.602-23.97 2.13 0 4.206.228 6.206.661L40.158 128.37Z"
              fill="var(--color-background)"
            ></path>
          </svg>

          <Text size="2" weight="medium">
            Recontent Studio
          </Text>
        </Flex>

        {children}
      </Flex>
    </Box>
  )
}
