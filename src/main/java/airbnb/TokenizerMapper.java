package airbnb;

import org.apache.hadoop.io.FloatWritable;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

import java.io.IOException;

public class TokenizerMapper extends Mapper<Object, Text, Text, IntWritable> {

    private Text asset = new Text();
    private FloatWritable count = new FloatWritable();

    public void map(Object key, Text value, Mapper.Context context) throws IOException, InterruptedException {

        String[] columns = value.toString().split(",");

        if (columns.length == 20) {
            // Extract the 'magasin' and 'cout' values
            asset.set(new Text("amsterdam"));
            count.set(Float.parseFloat(columns[1]));
            System.out.println(asset);
            System.out.println(count);
            context.write(asset, count);
        }
    }
}
