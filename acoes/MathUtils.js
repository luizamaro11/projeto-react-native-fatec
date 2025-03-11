import { Alert } from "react-native";

class MathUtils {
    static funcaoCalculo(number1, number2, acao, setSaida) {
        var result
        
        switch (acao) {
            case '+':
                result = parseFloat(number1) + parseFloat(number2)
                break;
            case '-':
                result = parseFloat(number1) - parseFloat(number2)
                break;
            case '*':
                result = parseFloat(number1) * parseFloat(number2)
                break;
            case '/':
                result = parseFloat(number1) / parseFloat(number2)
                break;
            default:
                break;
        }

        if (isNaN(result)) {
            Alert.alert('Por favor, insira números válidos.')
        } else {
            Alert.alert(`O resultado é: ${result}`)
            setSaida(`O resultado é: ${result}`)
        }
    }
}

export default MathUtils;