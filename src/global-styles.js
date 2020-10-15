import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0px;
        user-select: none;
        list-style: none;
    }
    html,body{
        overflow-x: hidden;
    }
    .__jumbo_text{
        color: #72767d; 
        font-weight: normal;
        font-size: 16px;
        line-height: 20px;
        text-align: center;
    }
}`;
