import { Item, List, Text, Title, Wrapper } from './Advantages.styled';

const Advantages = () => {
  return (
    <Wrapper>
      <List>
        <Item>
          <Title>Надёжно</Title>
          <Text>
            Использование многоуровневой серверной защиты. Система безопасности и контроля цифровых
            активов. Сервис размещён в авторитетных мониторингах и листингах. Гарантия поступления
            средств, при условии соблюдения правил обмена сервиса.
          </Text>
        </Item>
        <Item>
          <Title>Выгодно</Title>
          <Text>
            Всегда актуальные и выгодные курсы обмена ведущих мировых бирж. Отсутствие скрытых
            платежей или дополнительных комиссий. Фиксация и согласование курса с клиентом при
            условии наличного обмена.
          </Text>
        </Item>
        <Item>
          <Title>Современно</Title>
          <Text>
            Удобный современный ресурс. Автоматический поиск лучших курсов мировых криптобирж для
            совершения сделок. Автоматический обмен криптовалют с использованием банковских карт.
            Доступный и понятный интерфейс для всех.
          </Text>
        </Item>
        <Item>
          <Title>Конфиденциально</Title>
          <Text>
            Информация о пользователях не хранится на сервисе. Соблюдение строгой
            конфиденциальности. Мы уважаем Ваше желание не раскрывать личные данные о себе.
            Информация о заявках хранится в зашифрованном виде.
          </Text>
        </Item>
        <Item>
          <Title>Функционально</Title>
          <Text>
            Широкий выбор платёжных систем для вывода средств и направлений обмена. Обмен в удобной
            для клиента валюте. Высокая скорость проведения транзакций и обработки заявок.
            Круглосуточный автоматический обмен криптовалют.
          </Text>
        </Item>
        <Item>
          <Title>Выгодное партнёрство</Title>
          <Text>
            Предоставляем продуманные инструменты с высокой конверсией. API и другие форматы
            интеграции. Помощь и консультирование с подключением к сервису. Предоставление боксовых
            решений.
          </Text>
        </Item>
      </List>
    </Wrapper>
  );
};

export default Advantages;
