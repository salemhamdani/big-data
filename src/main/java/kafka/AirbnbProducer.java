package kafka;

import java.util.Properties;

import org.apache.kafka.clients.producer.Producer;
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;

import java.io.*;

public class AirbnbProducer {

    public static void main(String[] args) throws Exception {

        // Verifier que le topic est donne en argument
        if (args.length < 2) {
            System.out.println("le nom de topic est manquant ou le fichier des donnes");
            return;
        }

        // Assigner topicName a une variable
        String topicName = args[0].toString();

        // Get the dataSet to create a stream
        File data = new File(args[1].toString());

        // Creer une instance de proprietes pour acceder aux configurations du producteur
        Properties props = new Properties();

        // Assigner l'identifiant du serveur kafka
        props.put("bootstrap.servers", "localhost:9092");

        // Definir un acquittement pour les requetes du producteur
        props.put("acks", "all");

        // Si la requete echoue, le producteur peut reessayer automatiquemt
        props.put("retries", 0);

        // Specifier la taille du buffer size dans la config
        props.put("batch.size", 16384);

        // buffer.memory controle le montant total de memoire disponible au producteur pour le buffering
        props.put("buffer.memory", 33554432);

        props.put("key.serializer",
                "org.apache.kafka.common.serialization.StringSerializer");

        props.put("value.serializer",
                "org.apache.kafka.common.serialization.StringSerializer");

        Producer<String, String> producer = new KafkaProducer
                <String, String>(props);

        try {
            BufferedReader br = new BufferedReader(new FileReader(data));
            String line = br.readLine();
            int i = 0;
            while ((line = br.readLine()) != null && i < 10) {
                i++;
                String[] columns = line.split(",");
                String message = columns[0] + ',' + columns[3];
                producer.send(new ProducerRecord<String, String>(topicName,
                        Integer.toString(i), message));
            }
            br.close();
            System.out.println("Message envoye avec succes");
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            producer.close();

        }

    }
}
