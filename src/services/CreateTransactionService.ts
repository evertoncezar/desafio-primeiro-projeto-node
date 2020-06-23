import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, value, type }: RequestDTO): Transaction {
    // não deve permitir que uma transação do tipo outcome extrapole o valor total que o usuário tem em caixa
    if (type === 'outcome') {
      const getTotalBalance = this.transactionsRepository.getBalance().total;

      if (value > getTotalBalance) {
        throw new Error('Transaction without a valid balance!');
      }
    }

    const transaction = this.transactionsRepository.create({
      title,
      value,
      type,
    });

    return transaction;
  }
}

export default CreateTransactionService;
