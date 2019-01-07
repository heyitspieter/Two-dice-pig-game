import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // *********************************************
*** GENERAL
*********************************************
  '*': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'boxSizing': 'border-box'
  },
  'clearfix::after': {
    'content': '""',
    'display': 'table',
    'clear': 'both'
  },
  'body': {
    'backgroundImage': 'linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url(back.jpg)',
    'backgroundSize': 'cover',
    'backgroundPosition': 'center',
    'fontFamily': 'Lato',
    'fontWeight': '300',
    'position': 'relative',
    'height': [{ 'unit': 'vh', 'value': 100 }],
    'color': '#555'
  },
  'wrapper': {
    'width': [{ 'unit': 'px', 'value': 1000 }],
    'position': 'absolute',
    'top': [{ 'unit': '%V', 'value': 0.5 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translate(-50%, -50%)',
    'backgroundColor': '#fff',
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 50 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.3)' }],
    'overflow': 'hidden'
  },
  'player-0-panel': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 600 }],
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 100 }]
  },
  'player-1-panel': {
    'width': [{ 'unit': '%H', 'value': 0.5 }],
    'float': 'left',
    'height': [{ 'unit': 'px', 'value': 600 }],
    'padding': [{ 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 100 }, { 'unit': 'px', 'value': 100 }]
  },
  // *********************************************
*** PLAYERS
*********************************************
  'player-name': {
    'fontSize': [{ 'unit': 'px', 'value': 40 }],
    'textAlign': 'center',
    'textTransform': 'uppercase',
    'letterSpacing': [{ 'unit': 'px', 'value': 2 }],
    'fontWeight': '100',
    'marginTop': [{ 'unit': 'px', 'value': 20 }],
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'position': 'relative'
  },
  'player-score': {
    'textAlign': 'center',
    'fontSize': [{ 'unit': 'px', 'value': 80 }],
    'fontWeight': '100',
    'color': '#EB4D4D',
    'marginBottom': [{ 'unit': 'px', 'value': 130 }]
  },
  'active': {
    'backgroundColor': '#f7f7f7'
  },
  'active player-name': {
    'fontWeight': '300'
  },
  'active player-name::after': {
    'content': '"\2022"',
    'fontSize': [{ 'unit': 'px', 'value': 47 }],
    'position': 'absolute',
    'color': '#EB4D4D',
    'top': [{ 'unit': 'px', 'value': -7 }],
    'right': [{ 'unit': 'px', 'value': 10 }]
  },
  'player-current-box': {
    'backgroundColor': '#EB4D4D',
    'color': '#fff',
    'width': [{ 'unit': '%H', 'value': 0.4 }],
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'string', 'value': 'auto' }],
    'padding': [{ 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }, { 'unit': 'px', 'value': 12 }],
    'textAlign': 'center'
  },
  'player-current-label': {
    'textTransform': 'uppercase',
    'marginBottom': [{ 'unit': 'px', 'value': 10 }],
    'fontSize': [{ 'unit': 'px', 'value': 12 }],
    'color': '#222'
  },
  'player-current-score': {
    'fontSize': [{ 'unit': 'px', 'value': 30 }]
  },
  '#gameButton': {
    'position': 'absolute',
    'width': [{ 'unit': 'px', 'value': 200 }],
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translateX(-50%)',
    'color': '#555',
    'background': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'fontFamily': 'Lato',
    'fontSize': [{ 'unit': 'px', 'value': 20 }],
    'textTransform': 'uppercase',
    'cursor': 'pointer',
    'fontWeight': '300',
    'transition': 'background-color 0.3s, color 0.3s'
  },
  '#gameButton:hover': {
    'fontWeight': '600'
  },
  '#gameButton:hover i': {
    'marginRight': [{ 'unit': 'px', 'value': 20 }]
  },
  '#gameButton:focus': {
    'outline': 'none'
  },
  'i': {
    'color': '#EB4D4D',
    'display': 'inline-block',
    'marginRight': [{ 'unit': 'px', 'value': 15 }],
    'fontSize': [{ 'unit': 'px', 'value': 32 }],
    'lineHeight': [{ 'unit': 'px', 'value': 1 }],
    'verticalAlign': 'text-top',
    'marginTop': [{ 'unit': 'px', 'value': -4 }],
    'transition': 'margin 0.3s'
  },
  'btn-new': {
    'top': [{ 'unit': 'px', 'value': 45 }]
  },
  'btn-roll': {
    'top': [{ 'unit': 'px', 'value': 403 }]
  },
  'btn-hold': {
    'top': [{ 'unit': 'px', 'value': 467 }]
  },
  'dice': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'top': [{ 'unit': 'px', 'value': 178 }],
    'transform': 'translateX(-50%)',
    'height': [{ 'unit': 'px', 'value': 100 }],
    'boxShadow': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 60 }, { 'unit': 'string', 'value': 'rgba(0, 0, 0, 0.10)' }]
  },
  'winner': {
    'backgroundColor': '#f7f7f7'
  },
  'winner player-name': {
    'fontWeight': '300',
    'color': '#23d38a'
  },
  'message': {
    'fontSize': [{ 'unit': 'px', 'value': 17 }, { 'unit': 'string', 'value': '!important' }]
  },
  'final-score': {
    'position': 'absolute',
    'left': [{ 'unit': '%H', 'value': 0.5 }],
    'transform': 'translateX(-45%)',
    'top': [{ 'unit': 'px', 'value': 520 }],
    'color': '#555',
    'fontSize': [{ 'unit': 'px', 'value': 18 }],
    'fontFamily': ''Lato'',
    'textAlign': 'center',
    'padding': [{ 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 160 }],
    'textTransform': 'uppercase'
  },
  'final-score:focus': {
    'outline': 'none'
  },
  '#dice-1': {
    'top': [{ 'unit': 'px', 'value': 120 }]
  },
  '#dice-2': {
    'top': [{ 'unit': 'px', 'value': 250 }]
  }
});
