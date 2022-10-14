//Definido propriedades
type TweetProps = {
    text: string;
}

export function Tweet(props: TweetProps) {
    return(

      <p>{props.text}</p> // Para incluir um codigo js dentro do HTML, coloca-se chaves por volta

    );
}