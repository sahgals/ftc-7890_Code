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

 public void wait(int time) {
        try {
            Thread.sleep(time * 100);
        }
        catch(InterruptedException ex) {
            ex.printStackTrace();
        }
    }

    public void drive(double powerRight, double powerLeft, long time) { //moves robot; parameters are relatively self explanatory

        long now = System.currentTimeMillis();
        while(true)
        {
            right.setPower(powerRight); left.setPower(powerLeft); //sets power

            if(System.currentTimeMillis() >= now + time)
            {
                break;
            }
        }
        right.setPower(0);
        left.setPower(0);
    }

    public void init(){}public void loop(){}

    @Override
    public void start() {

        left = hardwareMap.dcMotor.get("backLeft");
        right = hardwareMap.dcMotor.get("backRight");
        right.setDirection(DcMotorSimple.Direction.REVERSE);


        drive(1, 0.5, 1600); // moves to center vortex and knock ball off
        drive(-1, -1, 500); // moves backward slightly
        drive(-0.1, 0.1,  8500); // tank turns to beacons
    }
}
