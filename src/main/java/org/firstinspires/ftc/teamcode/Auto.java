package org.firstinspires.ftc.teamcode;

/**
 * Created by Shrey on 1/14/2017.
 */

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.qualcomm.robotcore.hardware.DcMotorController;
import com.qualcomm.robotcore.eventloop.opmode.Autonomous;
import com.qualcomm.robotcore.util.ElapsedTime;

@Autonomous(name = "Autonomous", group = "Autonomous")
public class Auto extends OpMode {
    private ElapsedTime runtime = new ElapsedTime();
    DcMotor backRight;
    DcMotor backLeft;
    @Override
    public void init() {



    }

    /*
       * Code to run when the op mode is first enabled goes here
       * @see com.qualcomm.robotcore.eventloop.opmode.OpMode#start()
       */
    @Override
    public void init_loop() {

      




    }
    public void wait(int time) {
        try{
            Thread.sleep(time*100);
        }catch(InterruptedException e) {
            e.printStackTrace();
        }
    }

    /*
     * This method will be called ONCE when start is pressed
     * @see com.qualcomm.robotcore.eventloop.opmode.OpMode#loop()
     */

    public void moveForward(double pos1, int newTime) {
        while(runtime.seconds() <= (runtime.seconds() + newTime)) {
            backRight.setPower(pos1);
            backLeft.setPower(pos1);
        }
        runtime.reset();
    }

    @Override
    public void start() {
        loop();
       






    }

    //public void drive(long time, int pos1, int pos2) {

        //if(currentTime - System.currentTimeMillis)



    /*
     * This method will be called repeatedly in a loop
     * @see com.qualcomm.robotcore.eventloop.opmode.OpMode#loop()
     */
    @Override
    public void loop() {





        wait(15);

        moveForward(50, 3);
    }

    public void stopRobot() {
        backRight.setPower(0);
        backLeft.setPower(0);
    }
}
