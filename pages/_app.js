import '../styles/globals.css'
import { ClerkProvider, SignedIn, SignedOut, SignInButton } from '@clerk/nextjs'
function MyApp({ Component, pageProps }) {
  return (
    <ClerkProvider
      appearance={{
        signIn: {
          layout: {
            socialButtonsVariant: 'blockButton'
          },
          elements: {
            card: {
              width: '568px',
              position: 'relative',
              borderRadius: '0px',
              '&::before': {
                backgroundImage: "url('/left-side.png')",
                backgroundSize: '258px',
                backgroundRepeat: 'no-repeat',
                borderRadius: '1px',
                width: '258px',
                top: 0,
                bottom: 0,
                left: 0,
                position: 'absolute'
              }
            },
            main: {
              alignItems: 'flex-end',
              width: '100%'
            },
            socialButtonsBlockButtonText: {
              lineHeight: '20px'
            },
            socialButtons: {
              width: '250px'
            },
            socialButtonsBlockButton: {
              border: '1px solid rgb(57, 70, 73)',
              borderRadius: '3px',
              justifyContent: 'space-around'
              //width: '100%
            },
            dividerRow: {
              width: '250px'
            },
            formFieldRow: {
              width: '250px'
            },
            dividerLine: {
              background: 'rgb(0, 35, 51)'
            },
            dividerText: {
              color: 'rgb(0, 35, 51)'
            },
            footerActionLink: {
              color: 'rgb(55, 34, 211)',
              fontWeight: '500'
            }
          },
          variables: {
            colorPrimary: 'rgb(0, 255, 132)',
            fontSize: '15px',
            fontFamily: 'Merriweather Sans',
            fontFamilyButtons: 'Merriweather Sans',
            fontWeight: '600',
            colorText: 'rgb(0, 35, 51)',
            colorTextOnPrimaryBackground: 'rgb(0, 35, 51)'
          }
        }
      }}
    >
      <SignedIn>
        <Component {...pageProps} />
      </SignedIn>
      <SignedOut>
        <div className="">
          <SignInButton mode="modal" />
        </div>
      </SignedOut>
    </ClerkProvider>
  )
}

export default MyApp
