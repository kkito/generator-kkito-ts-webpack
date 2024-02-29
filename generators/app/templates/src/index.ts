export class TestIndex {
  public getName(): string {
    return '<%= name %>'
  }
}

const ti = new TestIndex()
alert(`hello ${ti.getName()}`)
