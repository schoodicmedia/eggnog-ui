import plugin from 'tailwindcss/plugin'

export const buttonComponent = plugin(
    function({ addComponents }) {
        const buttons = {
            '.eui-btn': {
                // 'background-color': '#3498DB',
                'border-radius': '2px',
                'color': '#FFFFFF',
                'padding': '20px',
                'text-align': 'center',
                'text-decoration': 'none'
            }
        }
        addComponents(buttons)
    }
)

export const inputComponent = plugin(
    function({ addComponents }) {
        const input = {
            '.eui-input': {

            }
        }
    }
)

export const listComponent = plugin(
    function({ addComponents }) {
        const list = {
            'li': {

            },
            'ul': {

            }
        }
    }
)