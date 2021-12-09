import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { SecondRequestComponent } from '../second-request/second-request.component';
// import {requireCheckboxesToBeCheckedValidator} from './require-checkboxes-to-be-checked.validator';

const createNewFormControl = () => {
  return new FormGroup({
    vinNumber: new FormControl('', [Validators.required, Validators.maxLength(17), Validators.minLength(17), Validators.pattern('^[A-Z0-9]{1,17}$')]),
    year: new FormControl(''),
    make: new FormControl(''),
    model: new FormControl(''),
    partName: new FormControl('', Validators.required),
    partType: new FormGroup({
      used: new FormControl(false),
      new: new FormControl(false),
      reManufactured: new FormControl(false),
    }, requireCheckboxesToBeCheckedValidator()),
  });
}
@Component({
  selector: 'app-request-info',
  templateUrl: './request-info.component.html',
  styleUrls: ['./request-info.component.css']
})
export class RequestInfoComponent implements OnInit {

  partNames: string[] = ['A Pillar', 'A Pillar Trim', 'A/C Bracket', 'A/C Compressor', 'A/C Compressor Clutch Only','A/C Condenser','A/C Condenser Fan','A/C Control Computer','A/C Evaporator','A/C Evaporator Housing only','A/C Heater Control (see also Radio or TV Screen)','A/C Hose','A/C Wiring Harness','Accelerator Cable','Accelerator Parts','Adaptive Cruise Projector','Air Bag','Air Bag Clockspring','Air Bag Ctrl Module','Air Box/Air Cleaner','Air Cond./Heater Vents','Air Flow Meter','Air Pump','Air Ride Compressor','Air Shutter','Air Tube/Resonator','Alternator Bracket','Amplifier/Radio','Antenna','Anti-Lock Brake Computer','Anti-Lock Brake Pump','Ash Tray/Lighter','Armrest','Audiovisual (A/V) (see also TV Screen)','Automatic Headlight Dimmer','Auto. Trans. Cooler','Axle Actuator (4WD)','Axle Assy Fr (4WD w. Housing)','Axle Assy Rear (w. Housing)','Axle Beam Front','(2WD, incl I Beam Susp)','Axle Beam Rear (FWD)','Axle Flange','Axle Housing Only','Axle Shaft','B Pillar Trim','Back Door (above rear bumper)','Back Door Glass','Back Door Handle, Inside','Back Door Handle, Outside','Back Door Hinge','Back Door Moulding','Back Door Shell','Back Door Trim Panel','Back Glass','Back Glass Regulator','Back Glass Shock','Backing Plate, Front','Backing Plate, Rear','Backup Camera','Backup Light','Battery Cable','Battery Terminal','Battery Tray','Bed, Pickup','Bed Floor (Pickup)','Bed Front Panel (Pickup)','Battery','Bed Side, Pickup','Bell Housing','Belt Tensioner','Blind Spot Camera','Blower Motor','Body Wiring Harness','Brake/Clutch Pedal','Brake Booster','Brake Proportioning Valve','Brake Rotor/Drum, Front','Brake Shoes/Pads','Brush Guard','Bumper Assy (Front) includes cover','Bumper Assy (Rear) includes cover','Bumper Bracket (Misc)</','Bumper Cover (Front)','Bumper Cover (Rear)','Bumper End Cap','Bumper Energy Absorber (Front)','Bumper Energy Absorber (Rear)','Bumper Face Bar (Front)','Bumper Face Bar (Rear)','Bumper Filler Panel','Bumper Guard (Front)','Bumper Guard (Rear)','Bumper Impact Strip','Bumper Reinforcement (Front)','Bumper Reinforcement (Rear)','Bumper Shock','Bumper Step Pad','C Pillar Trim','Cab Back Panel','Cab Clip, no cowl','Cabin Air Filter','Cabin Fuse Box','Caliper','Camera Projector','Camshaft Housing','Carburetor (see also Throttle Body)','Cargo Cover/Shade','Cargo Lamp','Carpet','Carrier (see also Differential)','Carrier Case','CD Player/Radio','Center Cap (Wheel)','Center Pillar','Charging Port Door Assembly','Chassis Control Computer (not Engine)','Clock','Clockspring (Air Bag)','Clutch Cable','Clutch Disc','Clutch Fork','Clutch Master Cylinder','Coil/Air Spring','Coil/Igniter','Column Switch','Computer Box Engine','Computer Box Not Engine','ondenser/Radiator mtd. Cooling Fan','Condenser','Connecting Rod, Engine','Console, Front','Console, Rear','Control Arm, Front Lower','Control Arm, Front Upper','Control Arm, Rear Lower','Control Arm, Rear Upper','Convertible Top Boot','Convertible Top Lift','Convertible Top Motor','Convertible Windscreen','Cooling Fan (Rad and Con mtd.)','Core (Radiator) Support','Cowl','Cowl Vent Panel','Crank Pulley (Harmonic Balancer)','Crankshaft','Cruise Control Computer','Cruise Control Servo/Regulator','Cruise Speed Controler','Cylinder Head (Engine)','D Pillar','Dash/Interior/Seat Switch','Dash Bezel','Dash Pad','Dash Panel','Dash Wiring Harness','Diesel Particulate Filter','Deck Lid','Differential Assembly (see also Carrier)','Differential Case Only','Differential Flange Only','Distributor','Door Back (door above rear bumper)','Door Front','Door Handle, Inside','Door Lock Striker','Door Handle, Outside','Door Lock Striker','Door Mirror Cover','Door Outer Repair Panel, Back','Door Outer Repair Panel, Front','Door Outer Repair Panel, Rear','Door Rear (side of vehicle)','Door Shell, Back','Door Shell, Front','Door Shell, Rear','Door Window Crank Handle','Drag Link','Drive-By-Wire','Drive Shaft, Front','Drive Shaft, Rear','EGR Valve','Electric Door Motor (not Window)','Electric Window Motor','Electrical Part Misc','Electronic Transmission Shifter','Emblem','Emergency Brake','Engine Block','Engine Computer','Engine Core','Engine Cover','Engine Cradle','Engine Cylinder Head','Engine Fuse Box','Engine Mounts','Engine Oil Pan','Engine Wiring Harness','Exhaust Assembly','Exhaust Cross Pipe','Exhaust Fluid Pump','Exhaust Fluid Tank','Exhaust Heat Shield','Exhaust Lead Pipe','Exhaust Manifold','Exhaust Muffler','Exhaust Pipe','Exhaust Resonator','Exhaust Tail Pipe','Fan Blade','Fan Clutch','Fender','Fender Extension','Fender Inner Panel','Fender Moulding','Fender Skirt','Fender/Wheelhouse Inner Liner','Flex Plate','Floor Mats','Floor Pan','Floor Shift Assembly','Flywheel','Fog Lamp','Fog Lamp Bracket','Fog Lamp Rear','Fog Lamp Switch','Frame','Frame Front Section Only','Frame Horn','Frame Upper & Lower Rails','Front Axle Assembly (4WD w Housing)','Front Axle Beam (2WD, incl I Beam Susp)','Front Bumper Assembly (includes cover)','Front Axle Shaft','Front Bumper Cover','Front Bumper Face Bar','Front Bumper Guard','Front Bumper Reinforcement','Front Console','Front Door','Front Door Glass','Front Door Handle, Inside','Front Door Handle, Outside','Front Door Hinge','Front Door Mirror','Front Door Mirror Glass','Front Door Moulding','Front Door Regulator','Front Door Shell','Front Door Switch','Front Door Trim Panel','Front Door Vent Glass','Front Door Vent Glass Regulator','Front Door Window Motor','Front Drive Shaft','Front End Assembly (Nose)','Front Valance','Front Seat Belt Assembly','Front Window Regulator','Fuel Cap','Fuel Cell','Fuel Cooler','Fuel Distributor (& Misc. Injection)','Fuel Filler Door','Fuel Filler Neck','Fuel Gauge','Fuel Injector (& Misc. Injection)','Fuel Injector Pump','Fuel Line','Fuel Pump','Fuel Rail (& Misc. Injection)','Fuel Tank','Fuel Tank Sending Unit','Fuse Box (Cabin)','Fuse Box (Engine)','Gas Cap','Gas Tank','Gate Interior Trim Panel','Gate Window Regulator','Gate/Lid','Gauge (Misc)','Generator','Glass, Back','Glass, Front Door','Glass, Front Vent','Glass, Quarter Window','Glass, Rear Door','Glass, Rear Vent','Glass, Special (see also Sunroof/TTop)','GPS Screen (see also Radio or Heater/AC Control)','Glove Box','Glass, Windshield','Grille','Grille Moulding','Grille Surround','Harmonic Balancer (Crank Pulley)','Hatch/Trunk Lid','Head (Cylinder)','Header Panel','Headlight Assembly','Headlight Ballast','Headlight Bracket','Headlight Bulb','Headlight Bucket','Headlight Cover (Plastic)','Headlight Door','Headlight Housing','Headlight Igniter','Headlight Lens','Headlight Motor','Headlight Switch (Column Mounted)','Headlight Switch (Dash Mounted)','Headlight Switch (see also Column Switch)','Headlight Washer Motor Only','Headlight Wiper Motor Only','Headliner','Headrest','Heads Up Display','Heater Assy','Heater Core','Heater Motor','Heater/AC Control (see also Radio or TV Screen)','Hood','Hood Hinge','Hood Insulation Pad','Hood Latch','Hood Ornament','Hood Prop','Hood Scoop','Hood Shock','Horn','Hub','Hub Cap/Wheel Cover (display w image)','Hub Cap/Wheel Cover (display w/o image)','Hub, Lockout (4WD)','Hybrid Converter/Inverter','Idler Arm','Ignition Module (see also Ignitor/Coil)','Ignition Switch','Ignitor/Coil','Info Screen (see also Radio or Heater/AC Control)','Inside Door Handle','Instrument Cluster (see also Speedo)','Instrument Cluster Bezel','Intake Manifold','Intercooler','Intercooler Pipe','Interior Complete','Interior Light','Interior Trim Panel (Gate/Lid)','Interior Trim Panel (Quarter)','Interior Trim Panel, Door (Back)','Interior Trim Panel, Door (Front)','Interior Trim Panel, Door (Rear)','Inverter Cooler','Jack Assembly','Keys/Latches and Locks','Key Remote/Fob','Kick Panel','Knee Assembly (see also Strut Assy)','Lamp Wiring Harness','Latch, Front Door','Latch, Rear Door','Latch, Back Door','Latches','Leaf Spring, Front','Leaf Spring, Rear','License Lamp','License Plate Bracket','Lid/Gate','Lid Interior Trim Panel','Lock Actuator','Lockout Hub, 4X4','Locks','Lug Wrench','Luggage Rack','Marker/Fog Light, Front','Marker/Side Light, Rear','Master Cylinder','Mirror, Door','Mirror, Rear View','Misc. Electrical','Moulding (Back Door)','Moulding (Fender)','Moulding (Front Door)','Moulding (Lid/Hatch/Gate)','Moulding (Quarter Panel/Bed Side)','Moulding (Rear Door)','Moulding (Rocker)','Moulding (Windshield)','Mouldings (Misc)','Mud Flap','Neutral Safety Switch','Night Vision Camera','Nose (Front End Assembly)','Oil Cooler','Oil Filter Adapter','Oil Pan, Engine','Oil Pan, Transmission','Oil Pump, Engine','Outside Door Handle','Overdrive Unit (see also Transmission)','Owners Manual','Paddle Shifter','Park/Fog Lamp Front','Parcel Shelf','Park Lamp Rear (Side)','Parking Assist Camera','Pickup Bed','Pickup Bed Floor','Pickup Bed Front Panel','Pickup Bed Side','Pickup Cap/Camper Shell','Piston','Pitman Arm','Power Brake Booster','Power Inverter (Hybrid)','Power Steering Assy','Power Steering Control Valve','Power Steering Cooler','Power Steering Motor','Power Steering Pressure Cyl','Power Steering Pressure Hose','Power Steering Rack/Box/Gear','Power Steering Pump','Power Steering Reservoir','Pressure Plate','Push Rod (Engine)','Quarter Interior Trim Panel','Quarter Moulding','Quarter Panel','Quarter Panel Extension','Quarter Repair Panel','Quarter Window','Quarter Window Motor','Quarter Window Regulator','Rack & Pinion (Steering)','Radiator','Radiator/Condenser mtd. Cooling Fan','Radiator Air Shutter','Radiator Core Support','Radiator Cover Baffle','Radiator Fan Shroud','Radiator Overflow Bottle','Radio/CD (see also A/C Control or TV Screen)','Radio Bezel Trim','Radio Face Plate','Radius Arm, Front','Rag Joint (see also Steering Coupler)','Rear Axle Assy (RWD)','Rear Axle Beam (FWD)','Rear Body Panel','Rear Bumper Assembly (includes cover)','Rear Bumper Cover','Rear Bumper Face Bar','Rear Bumper Guard','Rear Bumper Reinforcement/Misc','Rear Clip','Rear Console','Rear Crossmember','Rear Door (side of vehicle)','Rear Door Handle, Inside',
'Rear Door Handle','Outside','Rear Door Hinge','Rear Door Moulding','Rear Door Regulator','Rear Door Shell','Rear Door Switch','Rear Door Trim Panel','Rear Door Vent Glass','Rear Door Vent Glass regulator','Rear Door Window','Rear Door Window Motor','Rear Door Window Regulator','Rear Drive Shaft','Rear Finish Panel','Rear Gate/Lid','Rear Gate Window Motor','Rear Knuckle/Stub Axle','Rear Lower Valance','Rear Seat Belt Assembly','Rear Suspension (see also Control Arms)','Rear Suspension Locating Arm','Rear Suspension Trailing Arm','Rear Window Defogger','Rear Window Washer Motor','Receiver Dryer','Relay (Misc)','Ring and Pinion Only','Rocker Moulding','Rocker Panel (see also Center Pillar)','Roll Bar','Roll Bar Padding','Roof','Roof Panel (see also Sunroof)','Roof Rack','Running Boards','Running Board Motor','Seat, Back (3rd Row)','Seat, Back (4th Row)','Seat, Back (5th Row)','Seat, Front','Seat, Rear (2nd Row)','Seat Belt, Front','Seat Belt, Rear','Seat Belt Motor','Seat Belt Pretensioner','Seat Belt Track (Electric)','Seat Motor','Seat Switch','Seat Track, Front Only','Sensor (Body, Misc)','Sensor (Chassis, Misc)','Sensor (Drivetrain, Misc)','Shifter Assembly (Floor)','Shifter Linkage','Shock Absorber','Shock Mount','Sill Plate','Skid Plate','Slave Cylinder','Smog Pump','Spare Tire Carrier','Spare Tire Cover','Spare Tire Hoist','Special Glass','Speedometer Cable','Speedometer (see also Instr. Cluster)','Spindle','Spoiler, Front','Spoiler, Rear','Spring Hanger','Stabilizer Bar Only','Steering Column','Starter','Steering Column Shaft','Steering Coupler','Steering Knuckle (see also Knee & Strut)','Steering Rack/Box/Gear','Steering Pump','Steering Wheel','Strut (see also Knee Assy)','Strut Tower Brace','Sun Roof / T-Top','Sun Roof Motor','Sunvisor','Supercharger/Turbocharger','Tachometer','Tail Light','Tail Light Circuit Board','Tail Light Lens','Tailgate Cable','Tailgate/Trunk Lid','Tailgate/Trunk Lid','Tailgate Hinge','Tailgate Lift Motor','Thermostat Housing','Third Brake Light','Throttle Body/Throttle Valve Housing','Throwout Bearing','Tie Rod','Timing Belt/Chain','Tonneau Cover','Timing Cover','Timing Gears','Tire','Torque Convertor','Torsion Bar','Tow Hook','Track/Watts Linkage','Trailer Hitch','Trans OD Unit (see also Transmission)','Transaxle Housing Only','Transfer Case','Transfer Case Adapter','Transfer Case Core','Transfer Case Electric Motor','Transfer Case Switch','Transmission','Transmission Bellhousing Only','Transmission Clutch Actuator','Transmission Computer','Transmission Core','Transmission Crossmember','Transmission Front Pump','Transmission Mount','Transmission Pan','Transmission Torque Converter','Transmission Valve Body','Transmission Wiring Harness','Trim Ring','Trunk Lid Pull Down Motor','Trunk Lid/Hatch','Trunk Lid/Hatch Hinge','Trunk Lid/Hatch Shock','Trunk Lid/Tailgate Moulding','Turbo/Supercharger Core','Turbocharger/Supercharger','Turn Signal/Fog Lamp','TV Screen (see also Radio or Heater/AC Control)','Uniside','Vacuum Pump','Vacuum Storage Tank','Valance, Front','Valance, Rear','Valve Cover','Vapor Canister','Voltage Regulator','Washer Nozzle','Water Pump','Water Separator','Weather Stripping','Wheel (display w image)','Wheel (display w/o image)','Wheel Bearing','Wheel Cover/Hubcap (display w image)','Wheel Cover/Hubcap (display w/o image)','Wheel Lug Nut','Wheel Opening Moulding','Wheelhouse (Rear)','Winch','Window Motor','Window Regulator (Front)','Window Regulator (Rear)','Window Switch (Front Door)','Window Switch (Rear Door)','Window Washer Motor, Rear','Windshield','Windshield Frame','Windshield Hinge','Windshield Washer Motor (Front)','Windshield Washer Reservoir','Wiper Motor, Front (Windshield)','Wiper Arm','Wiper Linkage','Wiper Motor, Rear','Wiring Harness (Air Conditioning)','Wiring Harness (Body)','Wiring Harness (Dash)','Wiring Harness (Engine)','Wiring Harness (Lamp)','Wiring Harness (Misc)','Wiring Harness (Transmission)','York/U-Joint'];
  
  vehicleInfoForm = createNewFormControl();
  public shouldDisplayVehicleInfo: boolean = false;
  public vinError: string = '';
  userSelctedPartRequest: any;
  
  constructor(private httpService: HttpService, private router: Router, public dialog: MatDialog) { }

  public ngOnInit() {
  }
 
  
  public async onBlurMethod(event: any) {
    let inputValue = event.target.value;
    if (!this.vehicleInfoForm.controls['vinNumber'].valid){
      this.vehicleInfoForm.controls['year'].setValue('');
      this.vehicleInfoForm.controls['make'].setValue('');
      this.vehicleInfoForm.controls['model'].setValue('');
      this.shouldDisplayVehicleInfo = false;
    } else {
      let vinResponse: any = null;
      try {
        vinResponse = await this.httpService.get(`vin-decoder?vinNumber=${inputValue}`);
      } catch (error) {
        console.log(error);
        this.shouldDisplayVehicleInfo = false;
        this.vinError = error.error.message;
        return;  
      }
      this.vehicleInfoForm.controls['year'].setValue(vinResponse.data.vehicleDetail.year);
      this.vehicleInfoForm.controls['make'].setValue(vinResponse.data.vehicleDetail.make);
      this.vehicleInfoForm.controls['model'].setValue(vinResponse.data.vehicleDetail.model);
      this.vinError = '';
      this.shouldDisplayVehicleInfo = true;
    }
  }

  public formReset() {
    this.shouldDisplayVehicleInfo = false;
    this.vehicleInfoForm = createNewFormControl();
  }
  public async logout(): Promise<void> {
    try {
      await this.httpService.post('logout',null);
    } catch (error) {
      localStorage.removeItem('user');
      this.router.navigate(['/home']);
    }
    // Remove localstorage session info 
    localStorage.removeItem('user');
    this.router.navigate(['/home']);
  }
  public async post(): Promise<void> {
    const payload = {
      year: this.vehicleInfoForm.get('year').value,
      make: this.vehicleInfoForm.get('make').value,
      model: this.vehicleInfoForm.get('model').value,
      vinNumber: this.vehicleInfoForm.get('vinNumber').value,
      partName: this.vehicleInfoForm.get('partName').value,
      partType: {
        new: this.vehicleInfoForm.get('partType.new').value,
        used: this.vehicleInfoForm.get('partType.used').value,
        reManufactured: this.vehicleInfoForm.get('partType.reManufactured').value,
      },
      numberOfOffers: 0,
      offerStatus: 'OPEN',
    }
    
    const response = await this.httpService.post('buyer/submitPartRequest',payload);
    console.log(payload.make);
    this.formReset();
    this.openDialog(payload);
  }
  openDialog(partRequest){
    this.userSelctedPartRequest = partRequest;
    const dialogRef = this.dialog.open(SecondRequestComponent, {
      width: '400px',
      height: '600px',
      data: partRequest,
    });
  }
  
}
export function requireCheckboxesToBeCheckedValidator(minRequired = 1): ValidatorFn {
  return function validate (formGroup: FormGroup) {
    let checked = 0;

    Object.keys(formGroup.controls).forEach(key => {
      const control = formGroup.controls[key];

      if (control.value === true) {
        checked ++;
      }
    });

    if (checked < minRequired) {
      return {
        requireOneCheckboxToBeChecked: true,
      };
    }

    return null;
  };
}

 


  
