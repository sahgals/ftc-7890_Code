package org.firstinspires.ftc.teamcode;

/**
 * Created by Shrey on 1/14/2017.
 */

import com.qualcomm.robotcore.eventloop.opmode.OpMode;
import com.qualcomm.robotcore.hardware.DcMotor;
import com.qualcomm.robotcore.hardware.DcMotorSimple;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

    @TeleOp(name = "TeleOp", group = "Concept")
    public class TeleOpTest extends OpMode {

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

            double rStick = gamepad1.right_stick_y;
            double lStick = gamepad1.left_stick_y;






        }

        /*
         * This method will be called ONCE when start is pressed
         * @see com.qualcomm.robotcore.eventloop.opmode.OpMode#loop()
         */
        @Override
        public void start() {
            init();
            double rStick = gamepad1.right_stick_y;
            double lStick = gamepad1.left_stick_y;


            backLeft = hardwareMap.dcMotor.get("backLeft");
            backRight = hardwareMap.dcMotor.get("backRight");



            backLeft.setDirection(DcMotorSimple.Direction.REVERSE);


            backRight.setPower(rStick);
            backLeft.setPower(lStick);




        }

        /*
         * This method will be called repeatedly in a loop
         * @see com.qualcomm.robotcore.eventloop.opmode.OpMode#loop()
         */
        @Override
        public void loop() {

            double rStick = gamepad1.right_stick_y;
            double lStick = gamepad1.left_stick_y;




          backRight.setPower(rStick);
            backLeft.setPower(lStick);




        }
}
