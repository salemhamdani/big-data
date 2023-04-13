package airbnb;

import org.apache.hadoop.io.FloatWritable;
import org.apache.hadoop.io.IntWritable;
import org.apache.hadoop.io.Text;
import org.apache.hadoop.mapreduce.Mapper;

import java.io.IOException;

public class TokenizerMapper extends Mapper<Object, Text, Text, IntWritable> {

    private Text city = new Text();
    private FloatWritable realSum = new FloatWritable();

    public void map(Object key, Text value, Mapper.Context context) throws IOException, InterruptedException {

        String[] columns = value.toString().split(",");

        if (columns.length == 22) {
            // Extract the 'city' and 'realSum' values
            city.set(columns[0]);
            realSum.set(Float.parseFloat(columns[3]));
            System.out.println(city);
            System.out.println(realSum);
            context.write(city, realSum);
        }
    }
}
