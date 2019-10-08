const EMPTY = ' '
const WHITE_MAN = 'w'
const BLACK_MAN = 'b'
const WHITE_KING = 'wk'
const BLACK_KING = 'bk'

function isEmpty(piece) {
  return piece == EMPTY
}

function isPiece(piece) {
  return piece == WHITE_MAN || piece == BLACK_MAN ||
    piece == WHITE_KING || piece == BLACK_KING
}

function isOwnPiece(ownPiece, piece) {
  return (
    (ownPiece == WHITE_MAN || ownPiece == WHITE_KING) &&
      (piece == WHITE_MAN || piece == WHITE_KING) ||
    (ownPiece == BLACK_MAN || ownPiece == BLACK_KING) &&
      (piece == BLACK_MAN || piece == BLACK_KING)
  )
}

function isEnemyPiece(ownPiece, enemyPiece) {
  return (
    (ownPiece == WHITE_MAN || ownPiece == WHITE_KING) &&
      (enemyPiece == BLACK_MAN || enemyPiece == BLACK_KING) ||
    (ownPiece == BLACK_MAN || ownPiece == BLACK_KING) &&
      (enemyPiece == WHITE_MAN || enemyPiece == WHITE_KING)
  )
}

function isMan(piece) {
  return piece == WHITE_MAN || piece == BLACK_MAN
}

function isKing(piece) {
  return piece == WHITE_KING || piece == BLACK_KING
}

const forwardDirection = {
  [WHITE_MAN]: -1,
  [BLACK_MAN]: 1
}

function getForwardDirection(piece) {
  return forwardDirection[piece]
}

module.exports = {
  WHITE_MAN,
  BLACK_MAN,
  WHITE_KING,
  BLACK_KING,
  isEmpty,
  isPiece,
  isOwnPiece,
  isEnemyPiece,
  isMan,
  isKing,
  getForwardDirection
}
