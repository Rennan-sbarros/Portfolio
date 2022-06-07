/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import Switch from "react-switch";

export default function ThemeMode() {
    const [checked, setChecked] = useState(false);
    const handleChange = (nextChecked: boolean) => {
      setChecked(nextChecked);
    };
    const [themeState, setThemeState] = useState(false);
  
    useEffect(() => {
      const getTheme = localStorage.getItem('Theme');
      if (getTheme === 'light') {
        setThemeState(true);
        
      }
    }, []);
  
    useEffect(() => {
      if (themeState) {
        localStorage.setItem('Theme', 'light');
        document.body.classList.add('light-mode');
      } else {
        localStorage.setItem('Theme', 'dark');
        document.body.classList.remove('light-mode');
      }
    }, [themeState]);
  
    return (
      <a onClick={() => 
        setThemeState(!themeState)} >
        {themeState}
        {/* <Form>
          <Form.Switch 
            type="switch"
            id="custom-switch"
          />
        </Form> */}
        <Switch
          onChange={handleChange}
          checked={checked}
          className="react-switch"
        />
        
      </a>
      
    );
  }