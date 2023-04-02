package airbnb;

import org.apache.hadoop.io.FloatWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Reducer;

import java.io.IOException;

public class PriceAverageReducer extends Reducer<Text, FloatWritable, Text, FloatWritable> {

    private FloatWritable result = new FloatWritable();

    public void reduce(Text key, Iterable<FloatWritable> values,
                       Context context
    ) throws IOException, InterruptedException {
        float sum = 0;
        int counter = 0;
        for (FloatWritable val : values) {
            System.out.println("value: " + val.get());
            sum += val.get();
            counter++;
        }
        float average = sum / counter;
        System.out.println("--> Average price = " + average);
        result.set(average);

        context.write(key, result);
    }
}
