import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Header, Table } from 'semantic-ui-react';

const Discounts = () => (
  <Container text style={{ marginTop: '7em' }}>
    <Header as="h1">Правила бонусной программы</Header>

    <Header as="h3">1. Общие положения.</Header>

    <p>
      1.1. Бонусная программа «Альфа-бонус» действует в аптеках, осуществляющих
      деятельность внутри сети аптек «Альфа» (ООО «Альфа-Фарм»).
    </p>
    <p>1.2. Настоящие правила действительны с 15.09.2018 года. </p>
    <p>
      1.3. Настоящие правила определяют условия участия в бонусной программе
      «Альфа-бонус» и распространяют свое действие на всех без исключения
      участников программы.{' '}
    </p>
    <p>
      1.4. Участие в программе является подтверждением надлежащего ознакомления
      и согласия участника со всеми положениями данных правил.{' '}
    </p>

    <Header as="h3">2. Термины и определения </Header>
    <p>
      2.1. Бонусная программа «Альфа-бонус» (Программа) – программа поощрения
      лояльности клиентов путем начисления бонусов за совершенные покупки,
      разработана для постоянных покупателей сети аптек под логотипом «Альфа».{' '}
    </p>
    <p>
      2.2. Организатор – юридическое(-ие) лицо (-ца), обладающее исключительными
      правами по управлению и развитию Программы. Организаторами являются —
      Общество с ограниченной ответственностью «Альфа-Фарма» (юридический адрес:
      353445, Россия, Краснодарский край, ул.Ленина, 143, кв.170), Общество с
      ограниченной ответственностью «Альфа» (353445, Россия, Краснодарский край,
      ул.Летняя, д.4-6), осуществляющие деятельность под логотипами «Альфа».
    </p>
    <p>
      2.3. Участник – физическое лицо, допущенное Организатором к участию в
      Программе в соответствии с настоящими Правилами и являющееся держателем
      Карты. Бонусная карта Участника (Карта) – пластиковая карта со штрих-кодом
      и логотипом «Альфа-бонус», служащая для идентификации Участника в
      Программе при приобретении товаров и/или услуг у Организатора.{' '}
    </p>
    <p>
      2.5. Счет Участника (Счет) – счет Участника, на котором в соответствии с
      Правилами и Организаторами учитываются и накапливаются суммы произведенных
      Участником покупок и осуществляется начисление и списание бонусов.{' '}
    </p>
    <p>
      2.6. Анкета — форма, выдаваемая Организатором, которая при заполнении и
      подписании физическим лицом, является заявлением такого лица о намерении
      стать Участником Программы и подтверждает согласие Участника со всеми
      правилами Программы и на обработку персональных данных.{' '}
    </p>
    <p>
      2.7. Уведомление — информация, в том числе рекламного характера,
      передаваемая Участнику с помощью указанных в Анкете Участника средств
      связи.{' '}
    </p>

    <Header as="h3">3. Участие в Программе </Header>
    <p>
      3.1. Участником программы может стать любое физическое лицо, совершающее
      покупки в сети аптек под логотипом «Альфа» (далее – «Участник»).{' '}
    </p>
    <p>3.2. Выдача карты: </p>
    <p>
      3.2.1. Бонусную карту «Альфа-бонус» (далее «карта», «карта постоянного
      покупателя», «бонусная карта») можно получить в аптеках под логотипом
      «Альфа» и у партнеров после заполнении всех обязательных полей анкеты
      держателя карты «Аптечный Бонус».
    </p>
    <p>
      3.2.2. При заполнении анкеты данные в систему могут вноситься с задержкой
      до 20 рабочих дней.
    </p>
    <p>
      3.3.3. Заполнив и подписав Анкету Участника физическое лицо даёт свое
      согласие на использование его персональных данных для участия в Программе
      включая согласие получать информацию по указанным контактным данным.
      Участник пользуется данными правами, предусмотренными главой 2
      Федерального закона РФ «О персональных данных» (152-ФЗ). Персональные
      данные Участника, передаваемые на обработку, включают, но не
      ограничиваются: Ф.И.О., дата рождения, персональный Счет в Программе,
      телефон, адрес электронной почты, адрес проживания. Согласие действует в
      течение всего срока участия в Программе. Все собранные данные строго
      конфиденциальны и будут использованы лишь для составления базы данных о
      постоянных покупателях.
    </p>
    <p>
      3.3.4. Анкета без заполнения всех обязательных полей (под *), а также без
      подписи Участника считается недействительной и уничтожается. При этом
      Бонусная карта, выданная к этой анкете, блокируется.
    </p>
    <p>
      3.3.5. Организатор оставляет за собой право не рассматривать Анкету, если
      она не заполнена или обязательные к заполнению поля заполнены не
      полностью, и заблокировать выданную к данной анкете Бонусную карту.{' '}
    </p>
    <p>3.3. Начисление бонусов: </p>
    <p>
      3.3.1. Карта дает право ее держателю накапливать бонусы от стоимости
      каждого приобретаемого товара. Количество бонусов, которое может быть
      начислено за каждый приобретаемый товар, высчитывается в соотношении не
      менее 3% от стоимости товара. Предъявление Карты должно быть осуществлено
      во время совершения покупки на кассовом узле аптеки до момента пробития
      чека. Если покупатель не предъявил Карту до пробития чека, бонусы не
      начисляются.{' '}
    </p>
    <p>
      3.3.2. При покупке товаров по акции, специальным предложениям или
      распродажам бонусы начисляются.
    </p>
    <p>3.3.3. При приобретении Подарочных карт бонусы не начисляются.</p>
    <p>
      3.3.4. В случае проведения специальных рекламных Акций на карты Участников
      Программы могут начисляться дополнительные Бонусы, в том числе повышенные,
      в соответствии с условиями каждой конкретной Акции. Срок действия
      акционных бонусов — 3 (три) календарных дня, не считая дня начисления.
    </p>
    <p>
      3.3.5. Начисление Бонусов с использованием Бонусной Карты происходит
      только после факта оплаты покупки на кассе. Бонусы начисляются
      автоматически на Бонусный Счет покупателя на следующий день после дня
      покупки.
    </p>
    <p>
      3.3.6. Если по техническим причинам операции с картами онлайн невозможны,
      использование Карты для начисления Бонусов не допускается.{' '}
    </p>
    <p>.4. Списание бонусов:</p>
    <p>
      3.4.1. Бонусы используются для частичной оплаты товаров по курсу 1 бонус =
      1 рубль.
    </p>
    <p>
      3.4.2. Списание бонусов возможно только при наличии заполненной Анкеты
      Участника.
    </p>
    <p>3.4.3. Бонусами можно оплатить до 50% стоимости товара.</p>
    <p>
      3.4.4. Для списания бонусов покупатель перед совершением покупки должен
      предъявить Карту «Альфа-бонус» и уведомить фармацевта о своем желании
      списать бонусы в счет покупки товара. После списания бонусов они не могут
      быть восстановлены в случае отказа от предоставленных бонусов.
    </p>
    <p>
      3.4.5. Бонусы можно использовать при покупке товаров по акции, специальным
      предложениям или распродажам.
    </p>
    <p>
      3.4.6. При приобретении подарочной карты списание бонусов не
      предоставляется.
    </p>
    <p>
      3.4.7. При оплате части чека бонусами оставшаяся часть стоимости товара
      может быть оплачена наличными денежными средствами или банковской картой.{' '}
    </p>

    <Table celled padded compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell> </Table.HeaderCell>
          <Table.HeaderCell>Начисление бонусов</Table.HeaderCell>
          <Table.HeaderCell>Списание бонусов</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Покупка подарочной карты</Table.Cell>
          <Table.Cell>Нет</Table.Cell>
          <Table.Cell>Нет</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>Приобретение товаров по подарочной карте </Table.Cell>
          <Table.Cell>Да</Table.Cell>
          <Table.Cell>Да</Table.Cell>
        </Table.Row>

        <Table.Row>
          <Table.Cell>
            Приобретение товара по акциям, спецпредложениям или распродаже
          </Table.Cell>
          <Table.Cell>Да*</Table.Cell>
          <Table.Cell>Да*</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>

    <p>*Если это не ограничено другими условиями акции </p>

    <p>
      3.4.8. Если по техническим причинам операции с картами онлайн невозможны,
      использование Карты для списания Бонусов не допускается.{' '}
    </p>
    <p>
      3.5. Бонусы за покупки действительны в течение 180 календарных дней с
      момента их начисления за покупку.{' '}
    </p>
    <p>
      3.6. Участник вправе прекратить свое участие в Программе или аннулировать
      Карту в любое время путем направления Организатору письменного уведомления
      о прекращении участия по адресу: Общество с ограниченной ответственностью
      «Альфа» (353445, Россия, Краснодарский край, ул.Летняя, д.4-6).
    </p>
    <p>
      3.7. В случае поступления в адрес Организатора заявления Участника
      Программы об отзыве согласия на использование его персональных данных в
      рамках Программы, с даты, следующей за днем получения такого заявления,
      если в заявлении не был указан более поздний срок, действие Карты
      прекращается, бонусы аннулируются.{' '}
    </p>
    <p>
      3.8. Организатор вправе прекратить участие в Программе любого Участника
      без предупреждения в случае выявления нарушения Участником настоящих
      Правил.{' '}
    </p>
    <p>
      3.9. Срок действия Программы не ограничен. Организатор имеет право в любой
      момент прекратить действие Программы, разместив информацию о прекращении
      за 1 (один) месяц до предполагаемой даты прекращения в аптеках,
      участвующих в программе.{' '}
    </p>
    <p>
      3.10. Организатор имеет право в любой момент в одностороннем порядке
      изменить условия Программы. Условия Программы с изменениями должны быть
      представлены на информационных стендах в аптеках, участвующих в программе,
      за 7 (семь) дней до даты вступления в силу.{' '}
    </p>
    <p>
      3.11. Организатор по своему усмотрению может вводить ограничения в список
      товаров и услуг, при оплате которых Бонусы не начисляются, либо вводить
      список товаров и услуг, которые нельзя приобрести с использованием
      Бонусов.{' '}
    </p>
    <p>
      3.12. Согласившись на получение от Организатора Уведомлений,
      предусмотренных настоящими Правилами, Участник сохраняет за собой право
      отказаться от Уведомлений рекламного характера путем направления
      Организатору письменного отказа по адресу: Общество с ограниченной
      ответственностью «Альфа» (353445, Россия, Краснодарский край, ул.Летняя,
      д.4-6.
    </p>
    <p>
      3.13. Ответственность за сохранность Карты Участника, ограничение Карты
      Участника от несанкционированного доступа посторонних лиц лежит на
      Участнике.{' '}
    </p>

    <Header as="h3">
      4. Возврат покупки, которая была оплачена бонусами:{' '}
    </Header>
    <p>
      4.1. В случае предъявления Участником кассового или товарного чека, сумма
      бонусов, списанная для оплаты возвращаемого товара, зачисляется на счет
      участника.{' '}
    </p>
    <p>
      4.2. В случае возврата товара с применением оплаты бонусами, клиенту
      возвращается денежная сумма в размере, внесенном Участником в оплату
      товара при покупке, за вычетом суммы, оплаченной бонусами.{' '}
    </p>
    <p>
      4.3. Перечень товаров надлежащего качества, не подлежащих возврату,
      утвержден Постановлением Правительства РФ от 19.01.1998г №55.{' '}
    </p>

    <Header as="h3">5. Действия при утере карты покупателем. </Header>
    <p>5.1. При утере Бонусная карта не восстанавливается.</p>
    <p>
      5.2. Карта Участника действует в течение срока действия Программы или до
      любой другой даты прекращения действия Карты участника согласно настоящим
      Правилам.{' '}
    </p>

    <Header as="h3">6. Разрешение споров. </Header>
    <p>
      6.1. По всем вопросам, связанным с использованием Карт, необходимо
      обращаться к сотрудникам сети аптек «Альфа». В целях разрешения возможных
      спорных ситуаций Участник обязан сохранять чеки, подтверждающие размер
      уплаченных сумм.{' '}
    </p>
    <p>
      6.2. В случае, если спор между Организатором и Участником не может быть
      разрешен в соответствии с настоящими Правилами, он разрешается в
      соответствии с действующим законодательством Российской Федерации.{' '}
    </p>

    <Header as="h3">7. Порядок и условия обслуживания карт. </Header>
    <p>
      7.1. Карту нельзя подвергать воздействию магнитных полей, царапать,
      нагревать. Карта не принимается к обслуживанию, если:
    </p>
    <p>• она имеет серьезные механические повреждения; </p>
    <p>• она имеет поврежденный или не читаемый штрих код; </p>
    <p>
      • она заблокирована Организатором за нарушение Участником настоящих
      Правил.{' '}
    </p>
    <p>
      Случаи, при которых начисление или списание бонусов по Бонусной карте не
      осуществляется, если:{' '}
    </p>
    <p>• Отсутствует бонусная карта во время осуществления покупки;</p>
    <p>
      • По техническим причинам (отказ или сбой в работе каналов связи, перебои
      в электропитании, а также в иных случаях технического и/или
      технологического сбоя работы оборудования и программного обеспечения);
    </p>
    <p>• Неисправен сканер; </p>
    <p>
      • Штрих-код не считывается вследствие того, что карта находится в
      неудовлетворительном состоянии. В этом случае клиент должен получить новую
      карту. Данные на новую Бонусную карту со старой переносятся в течение 3-х
      рабочих дней.
    </p>
    <p>
      7.2. Участник обязуется самостоятельно отслеживать информацию на
      дополнительном чеке, содержащую персональное приветствие, информацию о
      накопленных баллах и прочую информацию Программы. Если Участник замечает
      несоответствие информации на чеке с фактическими данными, выводится
      сообщение об ошибке и пр., Участнику необходимо сообщить об этом
      фармацевту аптеки, участвующей в Программе.
    </p>
    <p>
      7.3. В случае указания ложных (неточных, недостоверных) сведений о себе, а
      также при несвоевременном изменении устаревших сведений Участник
      самостоятельно несет риск любых негативных последствий, связанных с такими
      неверными сведениями.{' '}
    </p>
    <p>
      7.4. Предоставление бонусов по картам постоянного покупателя является
      волеизъявлением Организаторов.{' '}
    </p>
    <p>
      7.5. Пользователь карты постоянного покупателя (покупатель), получая карту
      постоянного покупателя, безоговорочно и в полном объеме соглашается с
      условиями настоящей программы. Условия настоящей программы могут быть
      изменены в любой момент по решению Организатора и/или организаций
      осуществляющих продажу товара с применением Бонусных карт «Альфа-бонус»
      сети аптек «Альфа». Уведомление пользователя карты (покупателя),
      осуществляется путем размещения новой программы в открытом доступе в
      аптеках, участвующих в Программе.{' '}
    </p>
    <p>
      7.6. Представитель юридического лица не может использовать Бонусную карту
      для совершения покупок от имени юридического лица, даже если он является
      Участником Программы (Держателем Бонусной карты).
    </p>
    <p>
      7.7. Использовать Карту для получения наличных денежных средств
      невозможно.{' '}
    </p>
    <p>
      7.8. При совершении одной покупки может быть применена только одна
      Бонусная карта.{' '}
    </p>
    <p>7.9. Карта не является платежным средством. </p>
    <p>
      7.10. Собственник Бонусной карты - ООО «Альфа-Фарма». Собственник не несет
      ответственности за незнание Держателем карты "Правил Бонусной программы
      «Альфа-бонус».
    </p>
  </Container>
);

export default withRouter(Discounts);
