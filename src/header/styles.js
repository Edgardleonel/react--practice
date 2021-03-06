import styled from 'styled-components';


export const HeaderStyles = styled.div`

@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200;400;600;700&display=swap');

body, html {
    font-family: 'Montserrat', sans-serif !important;
}

.Header-new {
    height: 2em;
    width: 100%;
    position: fixed;
    background-color: ${props => props.theme.primary};
    color:#FFF;
    z-index: 999;
    box-shadow: 0 1px 1px 0 rgba(255, 255, 255, 0.07);
        .Header__content {
        display: flex;
        box-sizing: border-box;
        -webkit-box-align: center;
        align-items: center;
        margin-left: -8px;
        margin-right: -8px;
        flex-flow: row wrap;
            .content {    
                align-items: center;
                display: flex;
                max-width: 83.33%;
                flex: 0 0 83.33%;
                width: 24.99%;
                margin-left: 0%;
                padding-left: 8px;
                padding-right: 8px;
                box-sizing: border-box;
                align-self: auto;
                height: 2em;
                .Media {
                    -webkit-box-align: center;
                    align-items: center;
                    .figure{
                        -webkit-box-flex: 0;
                        flex: 0 0 auto;
                        img {
                            height: 60px;
                            width: auto;
                        }
                    }
                }
                .Media_content {
                    -webkit-box-flex: 1;
                    flex: 1 1 auto;
                    min-width: 0;
                    .Menu_content {
                        display: flex;
                        box-sizing: border-box;
                        align-items: flex-start;
                        margin-left: -8px;
                        margin-right: -8px;
                        flex-flow: row wrap;
                        width: 100%;
                        padding: 0;
                        ul {
                            display: -webkit-box;
                            display: flex;
                            -webkit-box-align: center;
                            align-items: center;
                            padding-left: 1rem;
                            margin: 0;
                            text-transform: uppercase;
                            font-size: 12px;
                            li{
                                display: list-item;
                                padding: 0 1rem;
                                list-style-type: none;
                            }
                        }
                        .MainNavigation__item {
                            display: inline-block;
                            -webkit-transition: all .15s ease;
                            transition: all .15s ease;
                            border-bottom: 3px solid transparent;
                            color: #FFF;
                            &:hover {
                                color: #d3a059;
                            }
                        }
                    }
                }
            }
        } 
        .Header_user {
            display: flex;
            font-size: 12px;

            div {
                flex: 1;
                padding: 0 5%;
            }
        }
    }
    .content_Body {
        display: flex;
        .Menu_body {
            display: flex;
            align-items: center;
            padding: 0 6em;
        }
    }

    .Media_body {
        padding-top: 2em;
        z-index: 99;
        height: 6em;
        position: fixed;
        width: 100%;
        align-items: center;
        display: flex;
        box-sizing: border-box;
        flex: 1;
        background-color: #18203e;
        ul {
            display: -webkit-box;
            display: flex;
            -webkit-box-align: center;
            align-items: center;
            padding-left: 1rem;
            padding: 0;
            margin: 0;
            li{
                display: list-item;
                padding: 0 1rem;
                list-style-type: none;
                .MainNavigation {
                    color: #FFF;
                    padding: 1rem 0;
                    font-size: 14px;
                    &:hover {
                        -webkit-transition: all .15s ease;
                        transition: all .15s ease;
                        color: #d3a059;
                    }
                }
            }
        }
    }


/* Underline From Center */
.MainNavigation {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }
  .MainNavigation:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 51%;
    right: 51%;
    bottom: 0;
    background: #d3a059;
    height: 4px;
    -webkit-transition-property: left, right;
    transition-property: left, right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .MainNavigation:hover:before, .MainNavigation:focus:before, .MainNavigation:active:before {
    left: 0;
    right: 0;
  }


@media(max-width: 768px) {
    .MainNavigation__item {
        width: max-content;
        font-size: 10px;
    }
    .Header_user, .Menu_body {
        display: none !important;
    }
    .Header-new {
        display: flex;
        align-items: center;
    }
    .Menu_content ul li {
        padding: 0 .35rem !important;
    }
}
`;



       


        
    

