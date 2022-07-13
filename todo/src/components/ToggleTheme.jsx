import { useContext } from "react";
import { ThemeContext } from "../App";

export default function ToggleTheme() {
  const theme = useContext(ThemeContext);

  const switchStyle = {
    position: 'relative',
    display: 'inline-block',
    width: '60px',
    height: '34px',
    margin: '1rem',
  }

  const switchInputStyle = {
    opacity: '0',
    width: '0',
    height: '0',
  }

  const switchSliderStyle = {
    position: 'absolute',
    cursor: 'pointer',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: '#ccc',
    borderRadius: '34px'
  }

  return (
    <label style={switchStyle}>
      <input type="checkbox" style={switchInputStyle} onClick={theme.toggleTheme} />
      <span className="slider round" style={switchSliderStyle} />
    </label>
  );
}