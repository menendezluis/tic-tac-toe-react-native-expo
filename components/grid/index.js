import React, {useState,useEffect} from 'react'
import {View, StyleSheet, Text} from 'react-native'
import Sign from '../sign'

const Grid = () => {
    const row1 = ["","",""]
    const row2 = ["","",""]
    const row3 = ["","",""]
    const [xorO, setXorO] = useState(true)
    const [board, setBoard] = useState([row1,row2,row3])
    const [endGame, setEndGame] = useState(false);
    const [winner, setWinner] = useState(null);
  
    const handleClick = (index1, index2) => {
        let letter = xorO ? 'X' : 'O'
        let newBoard = [...board]
        newBoard[index1][index2] = letter
        setBoard(newBoard)
        setXorO(!xorO)
    }
    let shift = xorO ? 'X' : 'O'
    let index1=null, index2=null

  useEffect(()=>{
      if(board[0][0] === 'X' && board[0][1] === 'X' && board[0][2] === 'X'){
           setEndGame(true)
           setWinner('X')
      }
        if(board[1][0] === 'X' && board[1][1] === 'X' && board[1][2] === 'X'){
            setEndGame(true)
           setWinner('X')
        }
        if(board[2][0] === 'X' && board[2][1] === 'X' && board[2][2] === 'X'){
            setEndGame(true)
            setWinner('X')
        }
        if(board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X'){
            setEndGame(true)
            setWinner('X')
        }
        if(board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X'){
            setEndGame(true)
            setWinner('X')
        }
        if(board[0][2] === 'X' && board[1][2] === 'X' && board[2][2] === 'X'){
            setEndGame(true)
            setWinner('X')
        }
        if(board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X'){
            setEndGame(true)
            setWinner('X')
        }
        if(board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X'){
            setEndGame(true)
           setWinner('X')
        }
        if(board[0][0] === 'O' && board[0][1] === 'O' && board[0][2] === 'O'){
            setEndGame(true)
            setWinner('O')
        }
          if(board[1][0] === 'O' && board[1][1] === 'O' && board[1][2] === 'O'){
            setEndGame(true)
            setWinner('O')
          }
          if(board[2][0] === 'O' && board[2][1] === 'O' && board[2][2] === 'O'){
            setEndGame(true)
            setWinner('O')
          }
          if(board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O'){
            setEndGame(true)
            setWinner('O')
          }
          if(board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O'){
            setEndGame(true)
            setWinner('O')
          }
          if(board[0][2] === 'O' && board[1][2] === 'O' && board[2][2] === 'O'){
            setEndGame(true)
            setWinner('O')
          }
          if(board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O'){
            setEndGame(true)
            setWinner('O')
          }
          if(board[0][2] === 'O' && board[1][1] === 'O' && board[2][0] === 'O'){
            setEndGame(true)
            setWinner('O')
          }

  },[board])
    return (
        < >
        <View style={styles.container}>
          {!endGame ?<Text style={styles.text}>{shift} s turn</Text> : 
          <Text style={styles.text}>Winner is {winner}</Text>}
            {board.map((row, index ) => { 
                 index1 = index
                return ( 
                     <View style={{flexDirection: "row"}}>{row.map((item, index) => {
                             index2 = index
                            return (
                              <Sign endGame={endGame} row={index1} col={index2} item={item}  handleClick={(dat1,dat2)=> handleClick(dat1,dat2)} xorO={xorO} />
                            )
                        })}
                   
                    </View>
                )
            })}
              
        </View>
   
        </>
    )
}

export default Grid

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    text: {
        fontSize: 30,
        color: 'red'
    }
       
});
