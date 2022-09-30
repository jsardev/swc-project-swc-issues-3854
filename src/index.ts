interface ISomething {
  execute(): string;
}

type SomethingOptions = {
  param1: string;
};

const ConstructorPropertyDecorator = (): Function => {
  return (target) => {
    console.log(target);
  };
};

const ClassDecorator = (): Function => {
  return (target) => {
    console.log(target);
  };
};

class Something implements ISomething {
  constructor(
    @ConstructorPropertyDecorator()
    private readonly options: SomethingOptions
  ) {}

  execute(): string {
    return "it works";
  }
}

class Service {
  doSomething() {
    return false;
  }
}

@ClassDecorator()
class AnotherSomething extends Service {
  constructor(private readonly someService: Service) {
    super();
  }

  execute(): boolean {
    return this.someService.doSomething();
  }
}

export const run = () => {
  const something = new Something({ param1: "value" });

  const service = new Service();
  const anotherSomething = new AnotherSomething(service);

  anotherSomething.execute()

  return something.execute();
};
