# GraphQL

GraphQL은 페이스북에서 만든 쿼리 언어

- Structed Query Language(이하 sql) 와 언어적 구조차이가 큼
- SQL - 데이터베이스 시스템에 저장된 데이터를 효율적으로 가져오는 것이 목적
  - 주로 백엔드 시스템에서 작성하고 호출

```SQL
SELECT plot_id, species_id, sex, weight, ROUND(weight / 1000.0, 2) FROM surveys;
```

- GQL - 웹 클라이언트가 데이터를 서버로부터 효율적으로 가져오는 것이 목적
  - 주로 클라이언트 시스템에서 작성하고 호출

```
{
  hero {
    name
    friends {
      name
    }
  }
}
```
