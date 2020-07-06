import React from 'react';
import { mount } from 'enzyme';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter as Router } from 'react-router-dom';
import { act } from 'react-dom/test-utils';
import LoginForm from './LoginForm';
import { LoginButton } from './LoginPage.style';
import { defaultThemes } from '../../utils/themeDefault';

describe('<LoginForm />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const loginMock = jest.fn();

  const Component = mount(
    <Router>
      <ThemeProvider theme={defaultThemes}>
        <LoginForm
          login={loginMock}
          isLoading={false}
          errorMsg={null}
        />
      </ThemeProvider>
    </Router>
    ,
  );

  it('should render', () => {
    expect(Component.length).toBe(1);
  });
  it('match snapshot', () => {
    expect(Component).toMatchSnapshot();
  });

  describe('<form />', () => {
    it('form element should have a onSubmit attribute', async () => {
      await (() => {
        expect(Component.props().onSubmit).toBeDefined();
      })
    });

    it('onSubmit attribute should be of type `function`', async () => {
      await (() => {
        expect(typeof Component.props().onSubmit === 'function').toBe(true);
      })
    });

    it('form element should have an `<input />` element', async () => {
      await (() => {
        expect(Component.find('form').childAt(0).type()).toBe('input');
      })
    });

    describe('<input />', () => {
      it('input element should be of type `text`', async () => {
        await (() => {
          expect(Component.find('form').childAt(0).props().type).toBe('text');
        })
      });

      it('input element value should be empty', async () => {
        await (() => {
          expect(Component.find('form').childAt(0).props().value).toBe('');
        })
      });

      it('input element should have an onChange attribute', async () => {
        await(() => {
          expect(Component.find('form').childAt(0).props().onChange).toBeDefined();
        })
      });

      it('onChange attribute should be of type `function`', async () => {
        await(() => {
          expect(typeof Component.find('form').childAt(0).props().onChange === 'function').toBe(true);
        })
      });

      it('should update the state when a value is email input', async () => {
        await(() => {
          const name = 'nmtri931@gmail.com';
          const input = Component.find('form').childAt(0);
          input.simulate('change', {
            target: {
              name: 'email',
              value: name,
            }
          });
          expect(Component.state().fields.name).toBe(name);
        })
      });

      it('should update the state when a value is password input', async () => {
        await(() => {
          const pw = '12345678';
          const input = Component.find('form').childAt(0);
          input.simulate('change', {
            target: {
              name: 'password',
              value: pw,
            }
          });
          expect(Component.state().fields.name).toBe(pw);
        })
      });
    });
  });

  it('should call loginMock once when Login button is clicked', async () => {
    await (() => {
      // trigger useEffect
      act(() => Component );
  
      const LoginBtnComp = Component.find(LoginButton).at(0);
      LoginBtnComp.simulate('click');
      expect(loginMock).toBeCalledTimes(1);
    })
  });
});
